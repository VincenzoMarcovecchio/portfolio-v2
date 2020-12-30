---
title: 'Fetching data with Netlify functions'
cover: 'fetching-an-api-with-netlify-functions.jpg'
date: '2020-12-30'
category: 'tech'
slug: 'fetching-an-api-with-netlify-functions'

tags:
  - netlify functions
  - AI extracted meta-data
---

I had this project in mind for a long time, to make a website for the comunity I live in, who knows in the future there could be a way to save some money on something or just it would be nice to have our own web site you know, with our news and stuff. At the beginning the website looked completely empty except for the hero section that I filled with some professional video that I found on the internet, I had to fill the rest of the page with something in case no writers would show up. It happend to be that I like Gatsby a lot so I choosed it as the framework to go for. So I thought to display some news and looked for some free API's (limited to a certain number of calls) and found the NEWSAPI. With the NEWSAPI though there was the need to be making the request from a server so far it was only working in development mode, in fact my fetch function in production was returning an error code. At wirst I thought to set up an express server and move everything to heroku, but than I looked into netlify functions also called `AWS’s serverless Lambda functions` and decided to give it a go, they could potentially have included the headers that I needed, well to this day the function returned the data I wanted to display, it worked and I will show you how. First you must go to the process of setting up Netlify functions in your project but this is pretty easy I will remind you once again. In the Netlify web interface, go to Site settings > Functions and enter a path to the directory in your repository where your serverless functions will be stored. The path is relative to the site’s base directory in your repository, like so

```public
public
src
functions
   └─ news.js

```

Say you call the folder `functions`. After that I recommend you to install the `Netlify Command Line` globally on your machine, type in your terminal `npm install netlify-cli -g`. For our purpose we are going to use it to test our functions while developing on localhost, in fact if you type `netlify dev` you can hit the netlify function to see if it works, you can also run `netlify link` if you want to skip the action of saving where the function is stored on the netlify web interface (do it anyway). Now the function will look something like this

```jsx
'use strict'; // when using strict mode you have to declare all variables

const fetch = require('node-fetch');

exports.handler = async function (event, context, callback) {
  const { NEWS_APIKEY } = process.env;
  const news_url = `https://newsapi.org/v2/top-headlines?country=it&apiKey=${NEWS_APIKEY}`;
  const news_response = await fetch(news_url);
  const news_data = await news_response.json();
  const callbackHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  callback(null, {
    statusCode: 200,
    headers: callbackHeaders,
    body: JSON.stringify(news_data),
  });
};
```

In your front-end you can call this api as you normally would with `fetch` or `axios` just applying a small path prefix

```jsx
useEffect(() => {
  fetch(`https://yoursite.netlify.app/.netlify/functions/news`) //.netlify is something required than go for the folder than the file you want
    .then((resultData) => {
      setArticles(resultData.articles);
    });
}, []);
```

You can access the array now.

The website is&nbsp;<a href="https://prolocofraine.netlify.app" target="_blank" rel="noopener noreferrer">here</a>

If you like the banner at the bottom of the page, it was made with CSS only, I might show you how in the next tutorial.

Happy coding
