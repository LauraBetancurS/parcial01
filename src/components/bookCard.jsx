const BookCard = ({book,onLike}) => {

    return (
    <>
        <h1>{book.title}</h1>
        <p>{book.author_name}  </p>
         <p>{book.first_publish_year}  </p>
         
        <button onClick={() => onLike(book)}>Me gusta</button>
    </>
    )
}

export default BookCard;