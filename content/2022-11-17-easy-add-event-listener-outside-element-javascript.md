---
title: "Detect outside click with only few lines of Javascript code "
cover: "easy-add-event-listener-outside-element-javascript.jpg"
date: "2022-11-17"
category: "javascript"
slug: "easy-add-event-listener-outside-element-javascript"

tags:
  - javascript
  - event-listener
---

I found a pretty straight solution for this problem. You can add an event listener targeting an element by his id like so 


```jsx


window.addEventListener('mouseup',function(event){
        var pol = document.getElementById('pol');
        if(event.target != pol && event.target.parentNode != pol){
            pol.style.display = 'none';
        }
  }); 


```


<iframe height="300" style="width: 100%;" scrolling="no" title="Hide Div on Clicking outside" src="https://codepen.io/bravotanmoy/embed/preview/xrbYLN?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/bravotanmoy/pen/xrbYLN">
  Hide Div on Clicking outside</a> by Tanmoy Biswas (<a href="https://codepen.io/bravotanmoy">@bravotanmoy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
