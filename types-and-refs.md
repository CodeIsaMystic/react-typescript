<div align="center" >
  <h1>Types and Refs on React</h1>

  <img src="https://miro.medium.com/max/1400/1*sby1Jwafc8jkPSbCfAgTnw.jpeg"
  style="max-width: 1050px; width: 100%; height: auto;">
</div>

<br>
<br>

## Table of content

- [Table of content](#table-of-content)
- [Introduction](#introduction)
- [Adding useRef to UseSearch component file](#adding-useref-to-usesearch-component-file)
- [Using the useRef hook to set the focu on the HTML Input Element](#using-the-useref-hook-to-set-the-focu-on-the-html-input-element)


<br>
<br>
<br>
<br>
<br>

## Introduction

Keeping the `const UserSearch: React.FC = () => {}` component as example to introduce the React hook `useRef`...

- set **a "Ref" to the input element**
- being sure, on the display, **we keep the focus on that input**.

<br>
<br>
<br>
<br>

## Adding useRef to UseSearch component file

- first adding the import: `import { useState, useRef } from 'react'`
- create a "Ref" inside the component: `const inputRef = useRef()`
- then assign to the "input": `ref={inputRef}`

**NOTES: an error message from Typescript is showing**

1. *Typescript is expecting that we apply a type to describe what type of element we assign this "Ref"... useRef<HTMLInputElement>()*

***TIP: `CTRL + click` will open the typescript file with all the interfaces...***

**But it's not sufficient to typescript. If we completely delete the `ref={inputRef}` to the render input JSX tag, it does not allows to be sure this "Ref" is applyed!!!**

- **Typescript** is aware that **the element might not be returned**...
- And so, be **`null`**

2. TS is expecting so, to mention the condition `if null` : **`useRef<HTMLInputElement | null>()`**
3. And set to `null` as default **`useRef<HTMLInputElement | null>(null)`**

<br>
<br>
<br>
<br>
<br>

## Using the useRef hook to set the focu on the HTML Input Element

