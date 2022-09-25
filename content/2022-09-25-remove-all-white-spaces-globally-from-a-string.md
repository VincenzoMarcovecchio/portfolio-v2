2022-09-25-remove-all-white-spaces-glabally-from-a-string
---
title: "How to remove all white-spaces globally from a string"
cover: ""
date: "2022-09-25"
category: "regex"
slug: "remove-all-white-spaces-globally-from-a-string"

tags:
  - regex
---

Regex are a powerful tool when it comes to string manipulation. For instance this expression ```jsx /\s+/g ``` in combination with ```jsx .replace()``` method works well. To note: the ```jsx /g ``` stands for globally. I find it useful when working with urls .


```jsx

let string = "ciao come stai oggi ?"

string.replace(/\s+/g, "-")

```

output will be: ciao-come-stai-oggi-?