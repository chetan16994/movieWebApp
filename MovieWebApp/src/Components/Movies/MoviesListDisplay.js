import MovieForm from "./MovieForm";
const MoviesListDisplay = props => {
    const hStyle = { color: 'red' };
    return (
        
        <div>
            <li>
                <h2>{props.name}</h2>
                <span>Rating: {props.rating}</span>
                <span>Show timimg: {props.timing}</span>
                <span>Capacity: {props.capacity}</span>
                <span>Release Date : {props.releaseDate.substring(0, 10)}</span>
                {/* <span>Screen Number : {props.screen}</span> */}
                <span>Category: {props.category}</span> 
                <MovieForm />
                <a href="movies.html"><img src={`images/${props.image}.jpg`} alt="" /></a>
                
            </li>
        </div >
    );
};

export default MoviesListDisplay;