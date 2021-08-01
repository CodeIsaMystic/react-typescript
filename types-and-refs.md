<div align="center" >
  <h1>Types, Refs & Effect in React</h1>

  <img src="https://miro.medium.com/max/1400/1*sby1Jwafc8jkPSbCfAgTnw.jpeg"
  style="max-width: 1050px; width: 100%; height: auto;">
</div>

<br>
<br>

## Table of content

- [Table of content](#table-of-content)
- [Introduction](#introduction)
- [Adding useRef to UseSearch component file](#adding-useref-to-usesearch-component-file)
- [Using the useEffect hook to set the focus on the HTML Input Element](#using-the-useeffect-hook-to-set-the-focus-on-the-html-input-element)
- [The entire code](#the-entire-code)


<br>
<br>
<br>
<br>
<br>

## Introduction

Keeping the `const UserSearch: React.FC = () => {}` component as example to introduce the React hooks `useRef` & `useEffect`...

- set **`useRef` to the input element then add `useEffect`**
- being sure, on the display, that the **input element is not `null`**
- **keep the focus on that input**

<br>

Using **`useEffect`**, it will combine the use of **`useRef`** hook to add an effect to the input element reference.
We will ensure to TS that this actual value is not `null`
With a little nested condition block code , we add `inputRef.current.focus()`

<br>
<br>
<br>
<br>

## Adding useRef to UseSearch component file

- first **adding the import**: `import { useState, useRef } from 'react'`
- **create a "Ref"** inside the component: `const inputRef = useRef()`
- then **assign to the input element**: `ref={inputRef}`

**NOTES: an error message from Typescript is showing**

<br>
<br>

1. *Typescript is expecting that we apply a type to describe what type of element we assign this "Ref"... `const inputRef = useRef<HTMLInputElement>()`*

> ***TIP: `CTRL + click` on `useRef<HTMLInputElement>()` will open the typescript file with all the interfaces...***

<br>
<br>

**But it's not sufficient to typescript. If we completely delete the `ref={inputRef}` to the render input JSX tag, it does not allows to be sure this "Ref" is applied!**

- **Typescript** is aware that **the element might not be returned**...
- And so, be **`null`**

1. TS is expecting so, to mention the condition `if null` : **`useRef<HTMLInputElement | null>()`**
2. And set to `null` as default **`useRef<HTMLInputElement | null>(null)`**

<br>
<br>
<br>
<br>
<br>

## Using the useEffect hook to set the focus on the HTML Input Element

- first **adding the import**: `import { useState, useRef, useEffect } from 'react'`
- **create a "useEffect"** inside the component: `useEffect(() => {}, [])`
- we add `, []` as second argument to be **sure that inner function is invoked only a single time**
- being sure the HTML Input element is not null: `!inputRef.current`
- then adding `inputRef.current.focus()` with a little nested condition block code
  
```typescript
/*  the final setting to useEffect which are checking if the input is not null */
useEffect(() => {
  if (!inputRef.current) {
    return
  }
  inputRef.current.focus()
}, [])
```

<br>
<br>
<br>
<br>
<br>

## The entire code

**RECAP :**

1. Add **the imports**
2. Add **the reference on the target element**
3. Specify to Typescript what **type of element and the condition of null**
4. Add **the "ref" as "JSX Attribute"** to the return rendering set to the HTML element targeted
5. Add **the useEffect hook with an empty Array** as 2sd argument
6. Specify **the condition if the element is not null**
7. Add **the effect as code instructions**

```typescript
/* add the imports  */
import { useState, useRef, useEffect } from 'react'

const users = [ ... ]

const UserSearch: React.FC = () => {
  /* the useRef set up  */
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [ name, setName ] = useState('')
  const [user, setUser] = useState<{ name: string, age: number } | undefined>()
  
  /* The useEffect() hook to add an effect to the reference element */
  useEffect(() => {
    /* the check up if its not null */
    if (!inputRef.current) {
      return
    }
    /* the instruction  */
    inputRef.current.focus()
  }, [])

  const onClick = () => { ... }

  return (
    <div>
      User Search
      {/* the `ref` JSX attribute set to `{inputRef}` */}
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick} >Find</button>
      <div> ... </div>
    </div>
  )
}

export default UserSearch
```
