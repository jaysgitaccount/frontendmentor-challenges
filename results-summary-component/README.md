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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

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

    // Look through results to see if anything returned a node
    for (let i = 0; i < searchChildren.length; i++) {
        if (searchChildren[i]) return searchChildren[i];
    }

    // If you can't find anything that matches
    return null;
}

console.log(findNode(clone.firstElementChild, 'score'))
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
