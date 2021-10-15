const MoviesListDisplay = props => {
    return (
        <div>
            <li>
                <h2>{props.name}</h2>
                <span>Rating: {props.rating}</span>
                <span>Release Date : {props.releaseDate.substring(0, 10)}</span>
                <span>Category: {props.category}</span> <a href="movies.html"><img src={`images/${props.image}.jpg`} alt="" /></a>
                
            </li>
        </div >
    );
};

export default MoviesListDisplay;