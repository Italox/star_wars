import React, {Component} from 'react';
import {resume} from './Film';

class ShowIntro extends Component{
    constructor(){
        super()
        this.state = {
            resume: resume
        }
    }
    render(){
        return(
            <div className="resumaodaporra"> 
                {this.state.resume}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    View Intro
                </button>
                
            </div>
        );
    }    
}
export default ShowIntro;