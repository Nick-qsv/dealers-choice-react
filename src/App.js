import React, {Component} from 'react';
import axios from 'axios'
import AddBook from '../components/AddBook'
import AllBooks from '../components/AllBooks'
import Header from '../components/Header'



export default class App extends Component{
    constructor(){
        super();
        this.state ={
            books: []
        }
        this.deleteBook = this.deleteBook.bind(this)
    }
    async componentDidMount(){
        const books = (await axios.get('/books')).data;
        this.setState({books})
    }
    async deleteBook(id){
        const books = (await axios.delete(`/books/delete-book/${id}`)).data  
        this.setState({ books });  
    }


    render(){
        const {books}= this.state;
        return(<div id='main'>
            <Header />
            <AllBooks books={books} deleteBook={this.deleteBook}/>
            <AddBook />
        </div>)
    }
}