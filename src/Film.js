import React from 'react';
import { Button } from 'react-bootstrap';
import Typist from 'react-typist';
const Film = ({name, resume, release_date}) =>{
    return(        
        <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src="https://fakeimg.pl/350x200/?text=Star Wars Movie" alt="Card image cap" />
        <div className="card-body">
            <h1>{name}</h1>
            <p className="card-text">
                <Typist className="starIntro">
                    {resume}
                </Typist>
            </p>
            <h6 className="card-subtitle mb-2 text-muted">{release_date}</h6>
            <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    View Intro
                </button>
            </div>
            
            </div>
        </div>
        </div>
    </div>   
    );
};

export default Film;