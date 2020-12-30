---
title: 'Fetching an api with netlify functions'
cover: 'decentralized-publishing-model.jpg'
date: '2020-12-30'
category: 'tech'
slug: 'fetching-an-api-with-netlify-functions'

tags:
  - netlify functions
  -AI extracted meta-data
---

I had this project in mind for a long time, to make a website for the comunity a live in, who knows in the future there could be a way to save some money on something or just to have our own site you know, with our news. At the start website looked completely empty except for the hero section that I filled with some professional video found on the internet, I had to fill the rest of the page with something in case no writers would show up. It happend to be that I like Gatsby a lot so I choosed it as the framework to go for. I thought to display some news so I looked for some free API's to use and found the NEWSAPI. With the NEWSApi though there was a need to be making the request from a server in fact it was only working in development mode, at wirst I thought to set up an express server and move everything to heroku, but that I thought to give netlify functions a go or also called `AWS’s serverless Lambda functions` they might include headers they are looking for, well it worked and I show you how. You must go to the process of setting up your project to using Netlify functions but this is pretty easy I will remind you once again. In the Netlify web interface, go to Site settings > Functions and enter a path to the directory in your repository where your serverless functions will be stored.

```
public
src
functions
   └─ hello.js

```

Say you call the folder `functions`. The path is relative to the site’s base directory in your repository. A fter that I recommend you to install the `Netlify Command Line` globally on your machine `npm install netlify-cli -g`. For our purpose we are going to use it to test our function on the local host running `netlify dev` you can also run `netlify link` if you want to skip the action of saving where the function is stored on netlify web interface. Now the function will look something like this

```jsx
'use strict'; // when using strict mode you have to declare all variables

const fetch = require('node-fetch');

exports.handler = async function (event, context, callback) {
  const { NEWS_API } = process.env;
  const news_url = `https://newsapi.org/v2/top-headlines?country=it&apiKey=${NEWS_API}`;
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
