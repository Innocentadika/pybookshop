import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleReleaseYear = (e) => {
    setReleaseYear(e.target.value);
  };

  const addBook = async () => {
    const bookData = {
      title,
      release_year: releaseYear,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();
      setBooks((prev) => [...prev, data]);
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="">
        <h1>Books</h1>

        <div className="">
          <input 
            type="text" 
            value={title} 
            onChange={handleTitle} 
            placeholder='Book title' 
          />
          <input 
            type="number" 
            value={releaseYear} 
            onChange={handleReleaseYear} 
            placeholder='Release year' 
          />
          <button type="button" onClick={addBook}>Add Book</button>
        </div>

        {books.map((book, id) => (
          <div key={id}>
            <p>Title: {book.title}</p>
            <p>Release year: {book.release_year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
