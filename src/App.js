import React, {Component} from 'react';
import axios from 'axios'
import AllBooks from '../components/AllBooks'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { _addBook, _deleteBook, _loadBooks } from '../store/store';

class App extends Component{
    constructor(){
        super();
        this.state ={
            author: '',
            title: '',
            content: '',
            coverUrl: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount(){
        await this.props.loadBooks();
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.addBook(this.state)
        this.setState({author: '',
        title: '',
        content: '',
        coverUrl: ''})
    }

    render(){
        const {books}= this.props;
        return(<div id='main'>
            <Header />
            <AllBooks books={books} deleteBook={this.props.deleteBook}/>
            <div className="addbook--container">
            <h2 className="form--title">Add a New Book to the List:</h2>
            <form className="form" onSubmit={this.handleSubmit}>
                <input  onChange={this.handleChange} type="text" placeholder="Book Title" className="form--input" name="title"/>
                <input  onChange={this.handleChange} type="text" placeholder="Author" className="form--input" name="author"/>
                <input  onChange={this.handleChange} type="text" placeholder="Description" className="form--input" name="content"/>
                <input  onChange={this.handleChange} type="text" placeholder="Cover Image URL" className="form--input" name="coverUrl"/>
                <button className="form--button" >Add Book</button> 
            </form>
        </div>
        </div>
        )
    }
}

const mapState = (state) => {
    return {
        books: state.books
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadBooks: ()=>{dispatch(_loadBooks())},
        addBook: (newBook)=>{dispatch(_addBook(newBook))},
        deleteBook: (id)=>{dispatch(_deleteBook(id))}
    }
}

export default connect(mapState, mapDispatch)(App)

//In the store we have a global state, one centralized system thats managing everything
//Always have access to the current state regardless of where you make the change, everyone looking at the store file.
//mapstate/mapdispatch are the tools to access the information, mapstate is looking at an object and updating
//mapdispatch is what were going to be using for functions, going to start triggering actions on the reducer
