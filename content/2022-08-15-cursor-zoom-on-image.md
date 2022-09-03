---
title: "Zoom animation on hover"
cover: ""
date: "2022-08-17"
category: "css"
slug: "cursor-zoom-on-image"

tags:
  - zoom
  - animation

---


Adding zoom animation on hover is easy to do and adds visual interest to your site. It's also easy to implement, with just a few lines of code.


To add a zoom animation on hover:
<ul>
<li>Add the following line of CSS code to your stylesheet:</li>
</ul>

.*[data-animation="zoom"]{-webkit-animation: zoom 1s linear infinite; -moz-animation: zoom 1s linear infinite; -o-animation: zoom 1s linear infinite; anim 4s linear infinite;}

<ul>
<li>
Create an event handler for click events that trigger this style rule in JavaScript (or use jQuery): var elem = document.querySelector('button'); elem[0].addEventListener("click", function() { elem[0].style["data-animation"].stop(); }, false);
</li>
</ul>

<iframe height="300" style="width: 100%;" scrolling="no" title="Image Zoom on Hover" src="https://codepen.io/Vinny92/embed/Barvpjd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Vinny92/pen/Barvpjd">
  Image Zoom on Hover</a> by Vincenzo Marcovecchio (<a href="https://codepen.io/Vinny92">@Vinny92</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>