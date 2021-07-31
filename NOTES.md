<div align="center" >
  <h1>States with Typescript & React</h1>

  <img src="https://i.stack.imgur.com/wqvF2.png"
  style="max-width: 1050px; height: auto;">
</div>

<br>
<br>

## Table of content

- [Table of content](#table-of-content)
- [Introduction to the following example](#introduction-to-the-following-example)
- [State with typescript](#state-with-typescript)
  - [Creating GuestList Functional Component](#creating-guestlist-functional-component)
  - [Notes on states Component](#notes-on-states-component)
- [Type Inference with state](#type-inference-with-state)
  - [Relational with types logic](#relational-with-types-logic)
  - [Keep it consistence with types definition](#keep-it-consistence-with-types-definition)
  - [Just mapping data to render the values](#just-mapping-data-to-render-the-values)

## Introduction to the following example

Creating a `state` folder in a quick "Guests List" application, attempting to list some name, typing in an input element.
**The following example is a studying case to handle state**, passing data with types control. The files architecture is not professional, only for the use case purpose.

<br>
<br>

1. creating a basic app **handling states with FC basics components**
2. it will need some events: 
   - **`onChange()` to the input controlled component**
   - **`onClick()` to the submit button**
3. the logic is simple: 
   - **get the value inside of the input**
   - **handling the guests listed when the button is clicked**.

<br>
<br>

*Here the basic component connected to the index.tsx, will change adding states handler...*

```typescript
/*  GuestList.tsx  */
const GuestList: React.FC = () => {
  return (
    <div>
      GuestList
    </div>
  )
}
export default GuestList




/*  index.tsx  */
import ReactDOM from 'react-dom';
import GuestList from './state/GuestList'

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

```

<br>
<br>
<br>
<br>
<br>
<br>
<br>

## State with typescript

### Creating GuestList Functional Component
  
  ***!!!! MENTION THE INPUT COMPONENT IS A CONTROLLED COMPONENT !!!!***

```typescript
/*  GuestList FC */
import { useState } from 'react'

const GuestList: React.FC = () => {
  const [ name, setName ] = useState('')

  return (
    <div>
      <h3>GuestList</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Add guest</button>
    </div>
  )
}

export default GuestList
```

### Notes on states Component

***!!!! MENTION THE INPUT COMPONENT IS A CONTROLLED COMPONENT !!!!***

1. **import** the `useState` hook from React
2. **destructuring and customizing hook**, in this case to handle names.
3. **adding an `onChange` event**, we do need to mention the `value` to be targeted on the `onChange()` callback `(e) => setName(e.target.value)`

4. After that we just will render data with `JSX` and `<li></li>` html element as a list.

<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Type Inference with state

### Relational with types logic

```typescript

import { useState } from 'react'

const GuestList: React.FC = () => {
  /*  The logic  */
  const [name, setName] = useState('')
  const [guests, setGuests] = useState([])
  
  const onClick = () => {
    setName('')
    setGuests([...guests, name])
  }


/* The JSX rendering  */
  return (
    <div>
      <h3>GuestList</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add guest</button>
    </div>
  )
}
```

**Typescript will detect a potential types conflict when manipulating data**

```javascript
  const [name, setName] = useState('')
  const [guests, setGuests] = useState([])
```

Typescript will look at `name` as a string type, and `guests` as an Array without any types mentioned. It will create a leak, then a types conflict.

<br>
<br>
<br>

### Keep it consistence with types definition

***With `useState('')` setting name to `''` as initial value, typescript can understand what type we are looking for, and we will explicitly mention with the same process using `useState<string[]>([])` for an Array.***

```typescript
  /*  Defining explicitly the `guests` types array  */
  const [guests, setGuests] = useState<string[]>([])
```

<br>
<br>
<br>

### Just mapping data to render the values

To finish the job, we just are **mapping the text data typed** within the **Input Controlled Component**, added to **The GuestsList array**, rendered as well with **an `<li></li>` html tag**.

***!!! THE KEY ATTRIBUTE WILL ALWAYS BE SPECIFIED WHEN MAPPING OVER ELEMENTS ON JSX!!!*** 

```typescript
      <ul>
        {guests.map(guest => {
          return ( <li key={guest}>{guest}</li> )
        })}
      </ul>
```