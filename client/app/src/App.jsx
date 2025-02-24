import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [books, setBooks] = useState([]);

useEffect(() => {
  fetchBooks();
}, []);

const fetchBooks = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/books/");
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.log(error);
  
  }
}

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
