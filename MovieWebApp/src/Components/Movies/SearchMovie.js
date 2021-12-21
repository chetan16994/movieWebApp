import { useCallback,useState, Fragment,useEffect,useRef } from "react";
import ShowSearchedMovies from "./ShowSearchedMovies";

const SearchMovie = () =>{

    const [movies,setMovies]=useState([]);
    const titleRef = useRef('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovieFetch = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const movieName = titleRef.current.value
            const url =
            // ""
                // `https://imdb-api.com/en/API/SearchMovie/k_u87040tw/${movieName}`
            //  `https://imdb-api.com/en/API/SearchMovie/k_d40xdze4/${movieName}`
             `https://imdb-api.com/en/API/SearchMovie/k_2e0orz7h/${movieName}`
            
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();         
            setMovies(data.results);
        } catch (error) {
            console.log(error)
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        searchMovieFetch();
    }, [searchMovieFetch]);

    const searchMovieHandler= event =>{
        event.preventDefault();
        searchMovieFetch();
    }

    let content = <p></p>;

    if (error) {
        content = <h1 style={{color:"red", marginLeft:"300px", fontSize:"35px"}}>{error}</h1>;
    }

    if (isLoading) {
        content = <h1 style={{ color: "white", marginLeft: "300px", fontSize: "35px"}}>Loading...</h1>;
    }

    return(
        <Fragment >
            <div style={{marginTop:"300px"}}>
            <form onSubmit={searchMovieHandler}>
                <div className="topnav">
                    <a>Movie Title</a>
                    <div className="search-container">
                        <input style={{ marginLeft: "100px" }} type='text' id='title' ref={titleRef} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </form>
            {content}
            {movies && <ShowSearchedMovies style={{}} results={movies} />}
            </div>
        </Fragment>
    )
};

export default SearchMovie;