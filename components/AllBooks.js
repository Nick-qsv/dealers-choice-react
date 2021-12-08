import React from 'react'
import Book from './Book'

export default function AllBooks(props){
    
    return(
    <div className="books--container">
        <Book books={props.books} deleteBook={props.deleteBook}/>
    </div>
    )
    
}