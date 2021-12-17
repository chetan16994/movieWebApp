import { uiActions } from './ui-slice';
import { moviesActions } from './movie-slice';

export const fetchMovieData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://movie-react-16994-default-rtdb.firebaseio.com/movie.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch movie data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const moviesData = await fetchData();
            console.log(moviesData," inside axtion")
            dispatch(
                moviesActions.setMovies({
                    
                        movies: moviesData
                    
                    // items: cartData.items || [],
                    // totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
           console.log(error)
        }
    };
};

export const sendMovieData = (movieData) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://movie-react-16994-default-rtdb.firebaseio.com/movie.json', {
                method: 'POST',
                body: JSON.stringify(movieData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Sending movie data failed.');
            }
            // props.addMovie(false)
            window.location.reload();
        };

        try {
            await sendRequest();
        } catch (error) {
            throw new Error(" Sending movie data failed. ")
        }
    };
};