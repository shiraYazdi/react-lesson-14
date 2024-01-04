import Book from "./Book";
import { useSelector } from "react-redux"

const List = () => {
    let arr = useSelector((state) => { return state.arr });
    return (<>
        <h1>this is my books</h1>
        <ul>
            {arr.map(item => <li key={item.id}> <Book oneBook={item} /></li>)}
        </ul>
    </>);
}

export default List;