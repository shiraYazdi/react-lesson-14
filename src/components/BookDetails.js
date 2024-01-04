import { useSelector } from "react-redux";

const BookDetails = () => {

    const selected = useSelector(state => state.selectedBook)
    return (
        <div>
            details of selected book:
            <h3>{selected.name}</h3>
            <h3>{selected.author}</h3>
            <h3>{selected.cost}</h3>
            <img src={selected.img}></img>
        </div>
    );
}

export default BookDetails;