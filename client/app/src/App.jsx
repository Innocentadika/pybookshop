import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);

  const [newTitle, setNewTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleReleaseYear = (e) => {
    setReleaseYear(e.target.value);
  };

  const handleNewTitle = (e) => {
    setNewTitle(e.target.value);
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

  const updateTitle = async (pk, release_year) => {
    const bookData = {
      title: newTitle,
      release_year,
    };

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();
      setBooks((prev) => prev.map((book) => {
        if (book.id === pk) {
          return data;
        } else {
          return book;
        }
      }));
      
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
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "DELETE",
      });

      setBooks((prev) => prev.filter((book) => book.id !== pk));
  } catch (e) {
    console.log(e);
    
  }
};

  return (
    <div>
      <div className="">
        <h1>Books</h1>

        <div className="" style={{display: 'flex', gap: 5, paddingBottom: 10, }}>

          <div>
          <label htmlFor="">Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={handleTitle} 
            placeholder='Book title' 
          />
          </div>
          
          <div>
          <label htmlFor="">Rel year:</label>
          <input 
            type="number" 
            value={releaseYear} 
            onChange={handleReleaseYear} 
            placeholder='Release year' 
          />
          </div>


        </div>

        <button type="button" onClick={addBook}>Add Book</button>

        {books.map((book, id) => (
          <div key={id}>
            <p>Title: {book.title}</p>
            <p>Release year: {book.release_year}</p>

            <div>
          <input type="text" name="" id="" 
          onChange={handleNewTitle}
          placeholder='Update Title...'  style={{height: '20px'}}/>
          <button onClick={() => updateTitle(book.id, book.release_year)}>Update</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
