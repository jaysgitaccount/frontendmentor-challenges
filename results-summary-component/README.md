# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)
![](./screenshot_mobile.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [LINK](https://github.com/jaysgitaccount/frontendmentor-challenges/tree/main/results-summary-component)
- Live Site URL: [LINK](https://jaysgitaccount.github.io/frontendmentor-challenges/results-summary-component/index.html)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

I tried to write a recursive function to find the element with a given class inside a subtree of nested DOM elements. Obviously just for fun, as `.querySelector()` does this for you.

```js
const display = document.getElementById('data-display');
const clone = display.querySelector('template').content.cloneNode(true);

/**
 * Recursively searches a tree of HTML DOM nodes
 * @param {node} node The root node of the subtree, needs to be an element
 * @param {string} string The class you're searching for
 * @returns matching node if found, null if not found
 */
function findNode(node, string) {
    if (node.classList.contains(string)) return node;
    if (node.children.length === 0) return null;

    let searchChildren = Array.from(node.children).map(child => findNode(child, string))

    for (let i = 0; i < searchChildren.length; i++) {
        if (searchChildren[i]) return searchChildren[i];
    }

    return null;
}

console.log(findNode(clone.firstElementChild, 'score'))
```

## Author

- Frontend Mentor - [@jaysgitaccount](https://www.frontendmentor.io/profile/jaysgitaccount)
- GitHub - [@jaysgitaccount](https://github.com/jaysgitaccount)