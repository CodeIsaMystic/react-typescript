<div align="center" >

  <h1>Types around props in React</h1>

  <img src="https://i.stack.imgur.com/wqvF2.png"
  style="max-width: 1050px; height: auto;">
</div>

<br>
<br>

## Table of content

- [Table of content](#table-of-content)
- [Explicit Component: passing props with typescript](#explicit-component-passing-props-with-typescript)
  - [Add an Interface object and use it with React.FC<ChildProps>](#add-an-interface-object-and-use-it-with-reactfcchildprops)
    - [With no explicit mention to React](#with-no-explicit-mention-to-react)
    - [With explicit mention to React](#with-explicit-mention-to-react)
  - [Adding a Callback like an `onClick()` event](#adding-a-callback-like-an-onclick-event)
  - [Children props](#children-props)

<br>
<br>
<br>

## Explicit Component: passing props with typescript

<br>
<br>

### Add an Interface object and use it with React.FC<ChildProps>

**The power of `React.FC<ChildProps>` or `React.FunctionComponent<ChildProps>`**

<br>

*Adding an Interface to define what props Child expects to receive from the Parent.*
From the **Parent** component to the **Child**, typescript is checking up if:

- we provide the correct props to the Child when it showed in the Parent
- we using the correct name & typed props in the Child component

```typescript
/*  Parent Component  */
import { Child } from './Child'

const Parent = () => {
  return <Child color="red" />
}

export default Parent
```

<br>
<br>

#### With no explicit mention to React

***Typescript does not knows that is a React component.***

```typescript
/* Child Component  */
interface ChildProps {
  color: string
}

export const Child = ({ color }: ChildProps ) => {
  return <div> { color } </div>
}
```

#### With explicit mention to React

- ChildAsFC will *be a React Functional Component.*
- it might *have some properties attached* (as propTypes, contextProps, defaultProps, displayName).
- ChildAsFC will *receive a props object of types ChildProps.*

<br>

```typescript
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>
}
```

<br>

### Adding a Callback like an `onClick()` event

<br>
<br>
<br>

Defining a callback as props in a Component **needs to be specified on the typescript `Interface`**

<br>

```typescript
interface ChildProps {
  color: string
  onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps ) => {
  return (
    <div>
      { color}
      <button onClick={ onClick } ></button>
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({ color , onClick}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Here</button>
    </div>
  )
}
```

<br>

And set it to the parent as well...

```typescript
import { Child } from './Child'

const Parent = () => {
  return <Child color="red" onClick={() => { console.log("clicked!!") }} />
}

export default Parent
```

<br>
<br>

### Children props

<br>
<br>
<br>

Remember that under the hood, if it's not specified to typescript that the code is not a React component, typescript will understand as it's some basic js code having some JSX, not much.

**So with `React.FC<ChildProps>` it also providing a prop called `children`**

Creating an Open/closing tag on a Parent Element, is specifying to React that it have some potentially content within and maybe some children too.

<br>

```typescript
const Parent = () => {
  return (
    <Child color="red" onClick={() => { console.log("clicked!!") }}>
      Child text, embedded content or Another Component
      <App />
    </Child>
  )
}
```

Well, it will shows an error on the `Child` component.The `Child` component is not defined as a React Component and so not include a `children` props. 

Switching to the `ChildAsFC` component, typescript will recognize it.

```typescript
/*  Child.tsx  */
interface ChildProps {
  color: string
  onClick: () => void
}

export const ChildAsFC: React.FC<ChildProps> = ({ color , onClick}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Here</button>
    </div>
  )
}

/*  Parent.tsx  */
const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => { console.log("clicked!!") }}>
      Child text, embedded content or Another Component
      <App />
    </ChildAsFC>
  )
}
```