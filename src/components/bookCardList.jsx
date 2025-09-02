import BookCard from "./bookCard.jsx";

const BookCardList = ({books,onLike}) => {

    return(
        <>
            {books.map((book) => 
            <BookCard book={book} key={book.key}   onLike={onLike} />)}
        </>
    )
}

export default BookCardList;