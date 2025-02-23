import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="">
        <h1>Books</h1>

        <div className="">
          <input type="text" placeholder='Book title'/>
          <input type="number" placeholder='Release date'/>
          <button type="submit">Add Book</button>
        </div>
      </div>
    </>
  )
}

export default App
