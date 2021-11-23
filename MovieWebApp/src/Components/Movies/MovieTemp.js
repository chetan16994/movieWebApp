import React from 'react';

import classes from './MovieTemp.module.css';

const MovieTemp = (props) => {
    { console.log("--- in movie temp ", props.movies) }
    return (
        <li className={classes.movie}>
            <h2>{props.movies.title}</h2>
            <h3>{props.movies.tagline}</h3>
            <p>Imdb rating :{props.movies.ratings}</p>
            <p>{props.movies.plot}</p>
        </li>
    );
};

export default MovieTemp;