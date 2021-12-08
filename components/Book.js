import React from 'react'

export default function Book(props){
    console.log(props)
    return(
    <div>
        {props.books.map((book)=>{
            return (
                
                <div className="single-book--container" key={book.id}>
                   
                 <img src={book.coverUrl} className='single-book--image'/>
                    <div className="single-content-div">
                        <h2 className="single-book--title">{book.title}</h2>
                        <h4 className="single-book--author">{book.author}</h4>
                        <b>Description: </b><p className="single-book--content">{book.content}</p>
                        <button className="single-book--button" onClick={()=>props.deleteBook(book.id)}>Delete Book</button>
                    </div>
                
                </div>
            )
        })}
    </div>
    )
}