import React from 'react'
import './App.css'

function App() {
  const name = 'Sam Doe'
  const loading = true;

  const foo = () => "Bars"


  return (
    <div className="App">
      <h1>Howdy Sam</h1>
      <React.Fragment>
        <span>{name}</span>
        { foo() }
      </React.Fragment>
      {loading ? <h4>Loading Howdy</h4> : null}
    </div>
  )
}

export default App
