import { useState,  } from 'react'
import BookCardList  from './components/bookCardList.jsx';

import './App.css'

function App() {
 const [books, setbooks] = useState([]);

 const [error, setError] = useState("")

   const [search, setSearch] = useState('');
   
   const [likedbooks, setlikedbooks] = useState([]);


   function handleLike(book) {
    setlikedbooks((prev) => [...prev, book]);
    setbooks((prev) => prev.filter((b) => b.Id !== book.bookId));
  }



     

    
  const handleSearch = () => {

   fetch(`https://openlibrary.org/search.json?q=${search}&limit=10`)
    .then((res) => res.json())
    .then((datos) => setbooks(datos.docs))
   .catch((error) => setError(error));};
   
   console.log(books);













  return (
    <>
      <div>

         <input 
      type='text'
      placeholder='Search book'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button  onClick={handleSearch} >bscar </button>

      
        <BookCardList books={books}   onLike={handleLike}  ></BookCardList>


        <h1>canciones que me gustan </h1>
         <BookCardList  books={likedbooks}  ></BookCardList>
             
         
      </div>
    
    </>
  )
}

export default App
