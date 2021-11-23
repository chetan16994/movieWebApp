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
        <Fragment>
            <form onSubmit={searchMovieHandler}>
                <div>
                    <label htmlFor='title' style={{ color: "white", marginLeft: "100px", fontSize:"45px" ,marginBottom:"250px", marginTop:"250px"}}>Movie title</label>
                    <br/>
                    <input style={{ marginLeft: "100px" }} type='text' id='title' ref={titleRef} />
                </div>
                <button style={{ marginLeft: "100px", }}>Search Movie</button>
            </form>
            {content}
            {movies && <ShowSearchedMovies results={movies} />}
        </Fragment>
    )
};

export default SearchMovie;