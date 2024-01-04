const initialState = {
    arr: [
        { id: 111, name: "the last normal", author: "Ruti Kepler", cost: 61, img:"https://yefe.co.il/wp-content/uploads/2020/02/%D7%94%D7%A0%D7%95%D7%A8%D7%9E%D7%9C%D7%99-%D7%94%D7%93%D7%9E%D7%99%D7%94-216x325.gif"},
        { id: 222, name: "mahalalel", author: "Maya Keinan", cost: 78, img:"https://yefe.co.il/wp-content/uploads/2020/02/%D7%9E%D7%94%D7%9C%D7%9C%D7%90%D7%9C-%D7%93%D7%A0%D7%99-%D7%94%D7%93%D7%9E%D7%99%D7%94-216x325.gif"},
        { id: 333, name: "stations", author: "Dvory Rand", cost: 66, img: "https://www.sifreiorhachaim.co.il/wp-content/uploads/2020/11/2072317-1.jpg"}
    ],
    selectedBook: null,
    selectedBookToEdit: null
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: state.selectedBookToEdit,
                arr: [...state.arr, action.book]
            }
        case "DELETE_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: state.selectedBookToEdit,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "SELECT_BOOK_TO_READ":
            return {
                selectedBook: action.payload,
                selectedBookToEdit: state.selectedBookToEdit,
                arr: state.arr
            }
        case "SELECT_BOOK_TO_EDIT":
            return {
                arr: state.arr,
                selectedBook: state.selectedBook,
                selectedBookToEdit: action.payload
            }
        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: null,
                arr: copy
            }
        default: return state;

    }
}