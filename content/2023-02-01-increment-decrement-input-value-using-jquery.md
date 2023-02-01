---
title: "Increment decrement input value using jquery "
cover: ""
date: "2022-02-01"
category: "jquery"
slug: "increment-decrement-input-value-using-jquery"

tags:
  - jquery
---

The intent is to change the input value without it going minus values


```js

    <div class="input-number">
	<input id="dinamic" type="number" min="1" value="1">
    <span class="qty-up">+</span>
    <span class="qty-down">-</span>
    </div>

```


```js

$(document).ready(function() { 

$(".qty-up").click(function() { //get element by class name
   $("#dinamic").get(0).value++ //input value
  });

$(".qty-down").click(function() { //get element by class name
    if( $("#dinamic").val() < 2){
        $(this).val('1'); //input value
    }

     else $("#dinamic").get(0).value--
  });
});


```