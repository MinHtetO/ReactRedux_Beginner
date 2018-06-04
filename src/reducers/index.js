import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SelectBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books:BooksReducer,
  selectedBook:SelectBookReducer
});

export default rootReducer;
