import { deleteBook, selectBookToEdit, selectBookToRead} from "../store/actions/book";
    
import { useDispatch } from "react-redux";

const Book = ({ oneBook }) => {
    let dispatch = useDispatch()
    return (
        <div>
            <h2>{oneBook.name}</h2>
            <input onClick={() => { dispatch(deleteBook(oneBook.id)) }} type="button" value="delete" />
            <input onClick={() => { dispatch(selectBookToEdit(oneBook)) }} type="button" value="edit" />
            <input onClick={() => { dispatch(selectBookToRead(oneBook)) }} type="button" value="show details" />
        </div>);
}

export default Book;