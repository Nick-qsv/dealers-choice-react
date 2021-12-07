import React, {Component} from 'react';
import axios from 'axios'
import AddBook from '../components/AddBook'
import AllBooks from '../components/AllBooks'
import Header from '../components/Header'



export default class App extends Component{
    constructor(){
        super();
        this.state ={
            //not sure
        }
    }
    // async componentDidMount(){

    // }
    render(){
        return(<div id='main'>
            <Header />
            {/* <AllBooks /> */}
            {/* <AddBook /> */}
        </div>)
    }
}