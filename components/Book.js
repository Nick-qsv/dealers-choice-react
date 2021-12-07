import React from 'react'

export default function Book(props){
    return(
    <div>
        {props.books.map((book)=>{
            return (
                <div className="single-book--container">
                <img src={book.coverUrl}/>
                    <b>Title: </b><h2 className="single-book--title">{book.title}</h2>
                    <b>Author: </b><h4 className="single-book--author">{book.author}</h4>
                    <b>Description: </b><p className="single-book--content">{book.content}</p>
                </div>
            )
        })}
    </div>
    )
}