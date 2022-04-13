---
title: "I scraped the Indeed job list, here's how I did it"
cover: "i-scraped-the-indeed-job-list-here-is-how-i-did-it.jpg"
date: "2021-07-17"
category: "scraping"
slug: "how-to-set-up-puppeteer-on-heroku"

tags:
  - puppeteer
  - express
  - heroku
---

I wanted to scrape indeed for all job queries related to my area, but let me tell you, scraping is a dirty job (in terms of copyrigths and I do not recommend it without further investigating more), in the end I came up with a decent solution that I still would consider just a first step. What I did was trowing a bunch of html code through the dangerouslySetInnerHTML API and that was it. You will see what I'm talking about

Basically I installed puppeteer on a heroku server and let node.js (express) do the work for me, I was than able to fetch the data from my gatsby front-end as you normally would with any RESTFul API

Here is the code I hosted on heroku

```js
const puppeteer = require('puppeteer')
const express = require('express')
const app = express()
const fs = require('fs') // I'm not sure why this is still here but there are no issues

const cors = require('cors')

app.use(cors()) //set it like this and will accept queries from any origin

app.get('/', async function (req, res) {


  async function scrap() {
    try {
      const browser = await puppeteer.launch({
        headless: true,  //if you say false you can see the browser opening and could debug better
        args: ['--no-sandbox', '--disable-setuid-sandbox'], //make it work on heroku
      })

      const page = await browser.newPage()

      await page.goto(
        'https://it.indeed.com/jobs?q=&l=Fraine%2C+Abruzzo&radius=50&from=serpso&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt',
      )

      // await page.waitForSelector('footer') didn't really worked

      const data = await page.evaluate(() => {
        const data = document.querySelector('#mosaic-provider-jobcards')
          .innerHTML
        return {
          data,
        }
      })

      await page.close()
      await browser.close()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const results = await scrap()

  res.send({ results })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
  console.log(`Running on port 5000`)
})


```



Easy right? One more thing you need to know is that your heroku buildpacks (look into settings) must provide these additional packages

<blockquote>

`https://github.com/minted/heroku-buildpack-chrome-headless`

`https://github.com/jontewks/puppeteer-heroku-buildpack`

</blockquote>


Now if everything goes well and your app is up and running, you should be able to call the home route and retrieve the data.

I could certainly have implemented a pagination feature or even a query search component, but I don't have neither money nor time, we'll see how it goes, bye for now