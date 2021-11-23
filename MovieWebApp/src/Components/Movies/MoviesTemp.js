import React, { useState, useEffect, useCallback } from 'react';

import MovieTemp from './MovieTemp';


const MoviesTemp =props=>{
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const movieID ="tt13429362";
    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://imdb-api.com/en/API/Title/k_d40xdze4/tt13429362');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            console.log(data," ---  in movies temp")
            
            const transformedMovies = 
                {
                    id: data.id,
                    title: data.title,
                    plot: data.plot,
                    tagline: data.tagline,
                releaseDate: data.releaseDate,
                ratings: data.imDbRating,
                ratingVotes: data.imDbRatingVotes
                };

            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);
    let content = <MovieTemp movies={movies} />;
    // let content = <p>Found no movies.</p>;

    // if (movies.length > 0) {
    //     content = <MovieListTemp movies={movies} />;
    // }

    // if (error) {
    //     content = <p>{error}</p>;
    // }

    // if (isLoading) {
    //     content = <p>Loading...</p>;
    // }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default MoviesTemp;