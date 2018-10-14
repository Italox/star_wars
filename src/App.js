import React, {Component} from 'react';
import FilmList from './FilmList';
//import {films} from './filmes';
import logo from './images/Star_Wars_Logo.svg';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            films: []
        }
    }
    componentDidMount(){
          fetch('https://swapi.co/api/films/').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            this.setState({films: data.results});
          }).catch(err => {
            console.error(err);
            // Do something for an error here
          });
    }
    render(){
        return(
            <div>   
                <div className="text-center"><img src={logo} className="App-logo" alt="logo" width="250"/></div>  
                <FilmList films={this.state.films} />
            </div>
        );
    }    
}

export default App;