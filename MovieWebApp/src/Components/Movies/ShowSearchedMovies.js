import ShowSearchedMovie from "./ShowSearchedMovie";
import { useState,Fragment } from "react";
import AddMovie from './AddMovie';

const ShowSearchedMovies = props => {
    const [addMovie, setAddMovie] = useState(false)
    const [imdbId, setimdbId] = useState('')

    return (
        <Fragment>
        {!addMovie &&
        <div>
            <div id="body" className="home">
                <div>
                    <ul>
                        {props.results.map((movie) => (
                            <ShowSearchedMovie
                                id={movie.id}
                                title={movie.title}
                                description={movie.description}
                                image={movie.image}
                                addMovie={setAddMovie}
                                imdbId={setimdbId}
                            />
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
        }
            {addMovie && <AddMovie id={imdbId} addMovie={setAddMovie}/>}
        </Fragment>
    );
};

export default ShowSearchedMovies;
