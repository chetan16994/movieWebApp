import MoviesListDisplay from "./MoviesListDisplay";
const MoviesList = props => {
    return (
        
        <div>{console.log(props)}
            <div id="body" className="home">
                <div>
                    <ul>
                        {props.data.map((movie) => (
                            <MoviesListDisplay
                                name={movie.name}
                                releaseDate={movie.releaseDate}
                                id={movie.id}
                                category={movie.category}
                                rating={movie.rating}
                                image={movie.image}
                                screen={movie.screen}
                                timing={movie.timing}
                                capacity={movie.capacity}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;