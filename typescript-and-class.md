<div align="center" >
  <h1>React-typescript with Class Component</h1>

  <img src="https://ionicframework.com/blog/wp-content/uploads/2019/02/typescript-in-react.png"
  style="max-width: 1050px; width: 100%; height: auto;">
</div>

<br>
<br>

## Table of content

- [Table of content](#table-of-content)
- [Introduction of Class Components](#introduction-of-class-components)
- [Defining "UserSearchProps" as users Props Types](#defining-usersearchprops-as-users-props-types)
  - [The `this.props.users.find()` on the `onClick()` method](#the-thispropsusersfind-on-the-onclick-method)
- [Defining the "UserSearchState" name & user](#defining-the-usersearchstate-name--user)
- [Using `interface` in depth for clean & readable code](#using-interface-in-depth-for-clean--readable-code)
- [Handling Events](#handling-events)
  - [Binding the Method](#binding-the-method)

<br>
<br>
<br>
<br>
<br>

## Introduction of Class Components

This section will demo the 3 following topics in a React class based components implementation. It's taking the case of reproducing the `UserSearch` component:

- **applying types to components props**
- **applying types to components state**
- **handling events**

<br>

**NOTES:**

1. listen the input for changes
2. submit the search value when the button is clicked
   - it will compare to the "users" data
   - and set the state if there's a match
3. handling the render if it's not undefined

<br>
<br>
<br>
<br>
<br>

## Defining "UserSearchProps" as users Props Types

*First, we define Props types using the **Interface** typescript keyword & syntax.*

```typescript
/* deifning user as props with types associated */
interface UserSearchProps {
  users: {
    name: string,
    age: number 
  }[] /* mention an array of users */
}

class UserSearch extends Component<UserSearchProps> {
  ...
}
```

***NOTICE: we mention the name & number types, also the `users` type as an Array of users***

### The `this.props.users.find()` on the `onClick()` method

Those `props` will help us **check if the user** is in the data base (here an Array of "hardcoded" `users` object) when **clicking the button**. It will use the `find()` array method, and a callback comparing each users name to the `this.state.name`

```typescript
onClick() {
  const foundUser = this.props.users.find(
    user => {
      return user.name === this.state.name
    }
  )

  this.setState({ user: foundUser })
}
```

<br>
<br>
<br>
<br>
<br>

## Defining the "UserSearchState" name & user

Handling states will force us **to define as default** and **set it to the new value** if it changes.
The difference with **Props which are "Read Only"**!

*As before we do the same process for defining the states with the Typescript keyword `interface`*

```typescript
/* The "user" state can be undefined in this course context  */
interface UserSearchState {
  name: string,
  user: { name: string, age: number } | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }
  ...
}
```

<br>

*on the `render()` method we are destructuring `name` & `user` for readability.*

```typescript
  /* destructuring and set it to `this.state` let the code more readable */
  const { name, user } = this.state
```

It will make the code easier to understand & to read : `value={name}` or `{user && user.name} {user && user.age}`


<br>
<br>
<br>
<br>
<br>

## Using `interface` in depth for clean & readable code

*As we do before for the `props & states`, the **"User interface" will give our intention***

```typescript
/* Replacing the `user` own types for code intentions & readability */
interface User {
  name: string,
  age: number
}
interface UserSearchProps {
  users: User[]
}
interface UserSearchState {
  name: string,
  user: User | undefined
}
```

<br>
<br>
<br>
<br>
<br>

## Handling Events

We are **listening for changes** on the Input Component which is set to `{ name: '', user: undefined }` by default, and **when clicking**, if it's **matching to a user, it will render** `User { name: string, age: number }`...

```typescript
/* The `render()` method is an explicit demo of what we attempt to handle in this simple application */
 render() {
    const { name, user } = this.state


    return (
      <div>
        User Search
        <input value={name} onChange={e => this.setState({name: e.target.value})} />
        <button onClick={this.onClick} >Find</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    )
  }
```

<br>
<br>
<br>

### Binding the Method

In **Class based Component, notice that we must bind this to use a method**.
In this example application, we clearly see the difference of one event defining outside of the `render()` and another inline inside...

```typescript
class UserSearch extends Component<UserSearchProps> {
  constructor(props: UserSearchProps | Readonly<UserSearchProps>) {
    super(props)
    /* `onClick()` need to be bind in the `constructor()`*/ 
    this.onClick = this.onClick.bind(this)
  }
  ...
}
```
*`onchange()` is just listening if there're new value typed on the input, so simple as we can do it inline. If there're some new values, we set it to the new state, if not it will `undefined`*

```typescript
/* `onChange()` is set up inline  */
onChange={e => this.setState({name: e.target.value})}
```