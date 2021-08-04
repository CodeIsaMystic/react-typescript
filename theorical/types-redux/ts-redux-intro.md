<div align="center" >
  <h1>Typescript - Redux: overview</h1>

  <img src="https://miro.medium.com/max/1400/1*uPhcd64Bo0Ori-etGi1RfQ.png"
  style="max-width: 1050px; width: 100%; height: auto;">
</div>

<br>
<br>
<br>
<br>

**Table of content**
- [Introduction](#introduction)
- [Get it started](#get-it-started)
- [Thinking about Design First](#thinking-about-design-first)
- [The NPM api](#the-npm-api)

<br>
<br>
<br>

## Introduction

**A simple application to use react, redux and typescript** together... A very small app, focused on the redux side of things, like project template to reuse.
It will use the NPM api package search...

- show a **simple text input & submit button** to the render
- when **clicked on the button**
- it will **search  on the NPM api** trying to find all the packages corresponding
- finally **rendering that list of results**

<br>
<br>

## Get it started

1. **create the application files** with CRA with a Typescript template
`$ npx create-react-app redux-ts --template typescript`

2. **change directory**
`$ cd redux-ts/`

3. **installing the exact versions**
`$ npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 reudx-thunk@2.3.0 @types/react`

<br>
<br>

## Thinking about Design First

***Before to code,** it could be clever to take some times thinking about what's gonna be the Store of the Application!!!*

- about **the reducers**
- **the information (data)** they gonna be to hold
- the **different actions creators**
- and **actions to be created** as well
...

<br>
<br>

## The NPM api

***Understand the data** which it's gonna evenly being fetched from the api*

**Looking at the url:**

`registry.npmjs.org/-/v1/search?text=react`

**Looking at JSON code:**

```json
{
  /* an array of objects as packages */
  "objects": [
    {
      /* Some objects with "package, score and searchScore */
      "package": {
        "name": "react",
        "scope": "unscoped",
        "version": "17.0.2",
        "description": "React is a JavaScript library for building user interfaces.",
        "keywords": [
          "react"
        ],
        "date": "2021-03-22T21:56:19.536Z",
        "links": {
          "npm": "https://www.npmjs.com/package/react",
          "homepage": "https://reactjs.org/",
          "repository": "https://github.com/facebook/react",
          "bugs": "https://github.com/facebook/react/issues"
        },
        "publisher": {
          "username": "gaearon",
          "email": "dan.abramov@gmail.com"
        },
        "maintainers": [
          {
            "username": "sebmarkbage",
            "email": "sebastian@calyptus.eu"
          },
          {
            "username": "gaearon",
            "email": "dan.abramov@gmail.com"
          },
          {
            "username": "acdlite",
            "email": "npm@andrewclark.io"
          },
          {
            "username": "brianvaughn",
            "email": "briandavidvaughn@gmail.com"
          },
          {
            "username": "fb",
            "email": "opensource+npm@fb.com"
          },
          {
            "username": "trueadm",
            "email": "dg@domgan.com"
          },
          {
            "username": "sophiebits",
            "email": "npm@sophiebits.com"
          },
          {
            "username": "lunaruan",
            "email": "lunaris.ruan@gmail.com"
          }
        ]
      },
      "score": {
        "final": 0.5858978614585799,
        "detail": {
          "quality": 0.5247240973709911,
          "popularity": 0.8908970445160453,
          "maintenance": 0.3333333333333333
        }
      },
      "searchScore": 100000.63
    },
    {}, /* some others packages search results */
    {}, /* some others packages search results */
    {}  /* some others packages search results */
  ]
}
```

In that program, we will only purchase the `package` property. We do not need more... Notice that the term "package" is a Typescript Reserved Keyword, so we will maybe use "repositories" to fetch the NPM Packages.
