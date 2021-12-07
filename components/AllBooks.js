import React from 'react'
import Book from './Book'

export default function AllBooks(props){
    console.log(props)
    return(
    <div className="books--container">
        <Book books={props.books}/>
    </div>
    )
    
}