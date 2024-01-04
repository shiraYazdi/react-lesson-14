import logo from './logo.svg';
import './App.css';
import  List  from './components/List.js'
import { useSelector } from 'react-redux';
import BookDetails from './components/BookDetails.js'
import EditBook from './components/EditBook.js'
import AddBook from './components/AddBook.js';


function App() {
  let selected = useSelector(st=>st.selectedBook);
  let selectedToEdit = useSelector(st=>st.selectedBookToEdit);
  return (<>
   <List/>
   {selected && <BookDetails/>}
   {selectedToEdit && <EditBook/>}
   <AddBook/>
   </>
  );
}

export default App;
