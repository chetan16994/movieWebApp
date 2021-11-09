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
                                theater={movie.theater}
                                timing={movie.timing}
                                capacity={movie.capacity}
                                price={movie.price}
                                nowShowing={movie.nowShowing}
                                onAddCartCapacity={props.onAddCartCapacity}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;