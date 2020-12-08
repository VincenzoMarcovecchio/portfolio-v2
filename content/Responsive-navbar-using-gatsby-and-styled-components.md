---
title: 'Responsive navbar using Gatsby and styled-components'
cover: 'responsive-navbar-using-gatsby-and-styled-components.jpg'
date: '2020-11-30'
category: 'tech'
slug: 'responsive-navbar-using-gatsby-and-styled-components'

tags:
  - design
  - responsiveness
  - navigation
---

This article is about showing you I how implemented this very website navigation bar.

See this magic right here 👇

![alt text](../static/image/navbar.gif 'Logo Title Text 1')

I promise we will make it work it out 😉

One thing we should understand first is the structure of the header component, how we are going to be nesting the navbar inside and the links to show, basically this is what we have

```
Header
│
└───header__content-wrapper
│   │   logo
│   │
│   └───Nav
│   │    │
│   │    └───ul
│   │
```
I must say that for what concerns the desktop version, our implementation is very easy to set up, but as many of you know it is better practice to start with the mobile version, so we better get the hard work done first 
