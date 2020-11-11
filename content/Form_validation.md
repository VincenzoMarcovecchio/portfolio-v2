---
title: 'Javascript form validation and submission '
cover: ''
category: 'javascript'
date: '2020-11-11'
slug: 'Javascript-form-validation'
tags:
  - javascript
---

In this tutorial I will walk you through a pretty simple form validation with javascript for checking the correct values of your input's and we will also try to submit the message thanks to the super simple getform.io end point. In the end you will be able to have a contact form working as web standards demands. I expect you to be familiar with JSX because that's what we are going to use in this example.

We will have two `input` fields and a `text-area` wrapped inside a `form` element
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

As you can see we have a label referencing the input through the name attribute (very important for accessibility), the type of the input is text since they are only letters, the required attribute will do the tricks if you don't want to write your custom javascript making sure the user has typed somenthing, but in this example we can get rid of that. Next is going to be the email input

```
<label htmlFor="email">Email address<label>

<input
    type="email"
    name="email"
    placeholder="Enter email"
    required //this attribute is otional
    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" //this attribute is optional
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

Now will wrap everything inside the form element end we will give it a submit button. the final result will look somenthing like this

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

Input's and labels have been wrapped inside another div for styling purposes and notice at the bottom the submit button. That's it for the markup, now let's get into the javascript. Our next move would be
