// Not actually a component. Examples of snippets.

// --------------------------------------------------------

// rfce - create and automatically export a new functional component
// import React from 'react'

// function ES7Snippets() {
//   return (
//     <div>ES7Snippets</div>
//   )
// }

// export default ES7Snippets

// ---------------------------------------------------------

// rafce - Create a React Arrow Function Const

// import React from 'react'

// const ES7Snippets = () => {
//   return (
//     <div>ES7Snippets</div>
//   )
// }

// export default ES7Snippets

// ---------------------------------------------------------

// rce - Create and export a new class component

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets

// ---------------------------------------------------------

// rconst - Creates a default constructor for a class component

// constructor(props) {
//   super(props)

//   this.state = {
//      first
//   }
// }

// ---------------------------------------------------------

// clg - to log something to the console

console.log(first)

// ---------------------------------------------------------

// clo - to log something with a name or string

console.log('first', first)