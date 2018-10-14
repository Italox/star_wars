import React from 'react';
import Film from './Film';

const FilmList = ({films}) =>{
    const filmArray = films.map((film, index) => {
        return <Film name={films[index].title} key={films[index].episode_id} resume={films[index].opening_crawl} release_date={films[index].release_date}></Film>
    });   

    return(
        <div className="container">
            <div className="row"> 
                {filmArray}
            </div>
        </div>
    );
}

export default FilmList;