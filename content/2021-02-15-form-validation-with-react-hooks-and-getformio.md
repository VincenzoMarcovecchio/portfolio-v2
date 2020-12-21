---
title: 'Form Validation with React Hooks and getform.io'
cover: '../image/react-contact-form.jpg'
category: 'javascript'
date: '2020-11-11'
slug: 'Form Validation with React Hooks and getformio'

tags:
  - javascript
---

In this tutorial I will walk you through a pretty simple form validation using the HTML5 validation attributes and we will also submit the form through the super simple <em>getform</em>&nbsp;api end point (go create your account on getform.io right now, it's simple). In the end you will be able to have a contact form working as web standards demands. I expect you to be familiar with JSX because that's what we are going to use in this example.

We will have two `input` fields and a `text-area` wrapped inside a `form` element,
we will also make sure to have the appropriate labels and to have a button `type=submit` at the bottom. The first input we are going to create is going to be for the name your users have

```
<label htmlFor="name">Name</label>

<input
    type="text"
    name="name"
    placeholder="Enter your name"
    required //this attribute is optional
/>

```

As you can see we have a label referencing the input through the name attribute (very important for accessibility), the type of the input is text since they are only letters, the required attribute will do the trick if you don't want to write your custom javascript making sure the user has typed something, to keep it simple in this example we are going to use it. Next is going to be the email input

```

<label htmlFor="email">Email address<label>

<input
    type="email"
    name="email"
    placeholder="Enter email"
    required
    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" // this regular expression will check for the email to be a standard approved email
/>

```

Same story here but the input type this time is email. Last is going to be the text-area

```
<label htmlFor="message">Message</label>

    <textarea
        aria-label="textarea" //this attribute is also optional, will also work as label and makes sure the lighthouse report is happy
        placeholder="Write your message here"
        name="message">
    </textarea>

```

Now will wrap everything inside the form element end we will give it a submit button. the final result will look something like this

```
<form className="my__form">

   <div className="form-group">
       <label htmlFor="name">Name</label>
           <input
             type="text"
             name="name"
             placeholder="Enter your name"
           />
         </div>

         <div className="form-group">
           <label htmlFor="email">Email address</label>
           <input
             type="email"
             name="email"
             placeholder="Enter email"
             required
           />
         </div>

         <div className="form-group">
           <label htmlFor="message">Message</label>
           <textarea
             placeholder="Write your message here"
             name="message"
           ></textarea>
         </div>

         <button type="submit">
           Submit
         </button>

</form>


```

Inputs and labels have been wrapped inside another div for styling purposes and notice at the bottom the submit button. That's it for the markup, we should get into a bit of javascript now. Our next move will be creating a component where our form will be stored. This component is going to be called Contact and it's going to be a functional component where we will
import `useState` from the react library and `axios` for submitting the form data

```
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

 const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  }); initial state for everything

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  }; //our magic will work thanks to the getform response
  and will be stored in this state sample

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/**your api key**',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  }; //and that's how you get the actual data
  through the entire form event.target that has gone through
  the html5 security assesments

    return (

   <form className="my__form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required //you could also specify the min lenght
               of words necessary to pass the test just look it up
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            />
          </div>

          <div className="form-group">
            <label htmlFor="textarea">Message</label>
            <textarea
              aria-label="textarea"
              required
              placeholder="What is up"
              name="message"
            ></textarea>
          </div>
          <button type="submit" disabled={serverState.submitting}>
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? 'successMsg' : 'errorMsg'}>
              {serverState.status.msg}
            </p>
          )} //down here we will show our server response
        </form>
    )
}

```

And I think this was one of the easiest way to make the contact form of your website, probably the easiest yes. Hope you have a good one. Peace
