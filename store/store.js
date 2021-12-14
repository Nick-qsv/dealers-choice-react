import { connect } from 'react-redux'
import { createStore } from 'redux'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

//Action Types
const LOAD_BOOKS = "LOAD_BOOKS"
const ADD_BOOK = "ADD_BOOK"
const DELETE_BOOK = "DELETE_BOOK"

//Action Creators
const load_books = (books) =>{
    return {
        type: LOAD_BOOKS,
        books
    }
}
const add_book = (book) =>{
    return {
        type: ADD_BOOK,
        book
    }
}

const delete_book = (id)=>{
    return{
        type: DELETE_BOOK,
        id
    }
}
//Thunks

export const _loadBooks = () => {
    return async (dispatch) =>{
        const books = (await axios.get('/books')).data
        dispatch(load_books(books))
    }
  }

export const _addBook =(book)=>{
      return async (dispatch)=>{
        const addedBook = (await axios.post('/books/add-book', book)).data
        dispatch(add_book(addedBook))
      }
  }

  export const _deleteBook = (id)=>{
      return async (dispatch)=>{
          (await axios.delete(`/books/delete-book/${id}`))
          dispatch(delete_book(id))
      }
  }

//Initial State
const initialState = {
    books: []
}

//Reducer

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_BOOKS:
            return {
                ...state, books: action.books
            };
        case ADD_BOOK:
            return {
                ...state, books: [...state.books, action.book]
            }
        case DELETE_BOOK:
            const filter = state.books.filter((book)=> book.id !== action.id)
            console.log(filter)
            return {
                ...state, books: filter
            }
        default: 
            return state
    }
} 

//Store

const store = createStore(reducer, applyMiddleware(thunk, logger))
export default store;
