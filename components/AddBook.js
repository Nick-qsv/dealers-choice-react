import React from 'react'

export default function AddBook(){
    // constructor() {
    //   super()
    //   this.state = {
    //     name: '',
    //     author: '',
    //     content: '',
    //     coverUrl: ''    
    //   }
    // }
    return(
        <div className="addbook--container">
            <h2 className="form--title">Add a New Book to the List:</h2>
            <div className="form">
                <input type="text" placeholder="Book Title" className="form--input" name="title"/>
                <input type="text" placeholder="Author" className="form--input" name="author"/>
                <input type="text" placeholder="Description" className="form--input" name="content"/>
                <input type="text" placeholder="Cover Image URL" className="form--input" name="coverUrl"/>
                <button className="form--button" >Add Book</button> 
            </div>
        </div>
    )
}

//handle submit
    //prevent default and send information you need to your database
    //need a route
    //form you need to bind handle submit
//req.body for post route
    
    //handle change
    // handle change goal is to grab the value and set it up on state.
    //need to input into 
    //handle change needs labels
    