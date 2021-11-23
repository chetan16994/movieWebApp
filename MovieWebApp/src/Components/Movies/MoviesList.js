import MoviesListDisplay from "./MoviesListDisplay";
const MoviesList = props => {
    return (
        <div>
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
                                timing={movie.timing}
                                plot={movie.plot}
                                duration={movie.duration}
                                tagline={movie.tagline}
                                theater={movie.theater}
                                capacity={movie.capacity}
                                price={movie.price}
                                nowShowing={movie.nowShowing}
                                onUpdateCartCapacity={props.onUpdateCartCapacity}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;