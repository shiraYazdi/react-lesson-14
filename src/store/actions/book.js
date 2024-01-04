export const addBook = (book) =>{
    return {
        type: "ADD_BOOK",
        book: book
    }
}

export const deleteBook = (bookId) => {
    return {
        type: "DELETE_BOOK",
        payload: bookId
    }
}

export const selectBookToRead = (bookToRead) => {
    return {
        type: "SELECT_BOOK_TO_READ",
        payload: bookToRead
    }
}

export const selectBookToEdit = (book) => {
    return {
        type: "SELECT_BOOK_TO_EDIT",
        payload: book
    }
    
}

export const saveEditedBook = (editedbook) => {
    return {
        type: "SAVE_EDITED_BOOK",
        payload: editedbook
    }
}
 
