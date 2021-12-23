import React, { Fragment, useRef, useCallback, useState, useEffect } from 'react';
import classes from './AddMovie.module.css';
import { useDispatch } from 'react-redux';
import { sendMovieData } from '../../store/movies-action';
import {useNavigate} from 'react-router-dom';

function AddMovie(props) {

    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    const [showingStatus, setShowingStatus] = useState('coming soon');
    const [capacity, setCapacity] = useState("none");
    const [screenNumber, setScreenNumber] = useState("none");
    const [timeSlot, setTimeSlot] = useState("none");
    const [price, setPrice] = useState("none");

    const capacityIsValid = showingStatus === 'coming soon' || (capacity > 30 && capacity <= 60);
    const timeSlotIsValid = showingStatus === 'coming soon' || (timeSlot != "none");
    const screenNumberIsValid = showingStatus === 'coming soon' || (screenNumber != "none");
    const priceIsValid = showingStatus === 'coming soon' || (price != "none");

    let formIsValid = false;

    if (capacityIsValid && timeSlotIsValid && screenNumberIsValid && priceIsValid) {
        formIsValid = true;
    }

    const statusChangeHandler = event => {
        setShowingStatus(event.target.value);
    };
    const screenNumberChangeHandler = event => {
        setScreenNumber(event.target.value);
    };
    const timeSlotChangeHandler = event => {
        setTimeSlot(event.target.value);
    };

    const priceChangeHandler = event => {
        setPrice(event.target.value);
    };
    const capacityChangeHandler = event => {
        setCapacity(event.target.value);
    };

    const fetchMoviesHandler = useCallback(async () => {

        setIsLoading(true);
        try {
            // const url = `https://imdb-api.com/en/API/Title/k_d40xdze4/${props.id}`
            const url = `https://imdb-api.com/en/API/Title/k_2e0orz7h/${props.id}`
            // const url = `https://imdb-api.com/en/API/Title/k_u87040tw/${props.id}`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();

            const transformedMovies =
            {
                id: data.id,
                title: data.title,
                plot: data.plot,
                tagline: data.tagline,
                releaseDate: data.releaseDate,
                rating: data.imDbRating,
                tagline: data.tagline,
                duration: data.runtimeStr,
                image: data.image,
                genres: data.genreList
            };

            setMovie(transformedMovies);

        } catch (error) {
            console.log(error.message)
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    function submitHandler(event) {
        event.preventDefault();

        if (!capacityIsValid || !priceIsValid || !screenNumberIsValid || !timeSlotIsValid) {
            return;
        }

        const movieData = 
        {
            id: props.id,
            name: movie.title,
            tagline: movie.tagline ? movie.tagline : "",
            plot: movie.plot ? movie.plot : "",
            releaseDate: movie.releaseDate ? movie.releaseDate : "",
            duration: movie.duration ? movie.duration : "",
            image: movie.image ? movie.image : "",
            capacity: capacity,
            rating: movie.rating ? movie.rating : "",
            genres: movie.genres ? movie.genres : {},
            showingStatus: showingStatus,
            theater: screenNumber,
            timing: timeSlot,
            price: price
        };
        
        dispatch(sendMovieData(movieData));
        navigate("/");
    };

    return (
        <Fragment>
            <form style={{ width: "500px", marginLeft: "90px" }} onSubmit={submitHandler}>
                <div className={classes.control} >
                    <label htmlFor='id'>IMDB id</label>
                    <input type='text' id='id'
                        value={props.id}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input value={movie.title} type='text' id='title'
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='tagline'>Tagline</label>
                    <input value={movie.tagline} type='text' id='tagline'
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='plot'>plot</label>
                    <textarea value={movie.plot} rows='5' id='plot'
                    ></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Release Date</label>
                    <input value={movie.releaseDate} type='text' id='date'
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='duration'>Duration</label>
                    <input value={movie.duration} type='text' id='duration'
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='imageUrl'>Image</label>
                    <input value={movie.image} type='text' id='imageUrl'
                    />
                </div>
                <div className={classes.control}>
                    <label>
                        Showing Status
                        <select name='option' onChange={statusChangeHandler}>
                            <option value="coming soon">coming soon</option>
                            <option value="now showing">now showing</option>
                        </select>
                    </label>
                </div>
                {showingStatus === "now showing" &&
                    <div className={classes.control}>
                        <label htmlFor='capacity'>Seat Capacity</label>
                        <input type='number' id='capacity' value={capacity}
                            onChange={capacityChangeHandler}
                        />
                        {!capacityIsValid && (
                            <p className={classes['error-text']}>seat capacity must be between 30 and 60</p>
                        )}
                    </div>
                } {showingStatus === "now showing" &&
                    <div className={classes.control}>
                        <label>
                            Showtime Slot
                            <select name='option' onChange={timeSlotChangeHandler}
                            >
                                <option value="none">None</option>
                                <option value='8-11 AM'>8-11 AM</option>
                                <option value='12-3 PM'>12-3 PM</option>
                                <option value='4-7 PM'>4-7 PM</option>
                                <option value='8-11 PM'>8-11 PM</option>
                            </select>
                        </label>
                        {!timeSlotIsValid && (
                            <p className={classes['error-text']}>Time slot cant be empty</p>
                        )}
                    </div>
                } {showingStatus === "now showing" &&
                    <div className={classes.control}>
                        <label>
                            Screen Number
                            <select name='option' onChange={screenNumberChangeHandler}
                            >
                                <option value="none">None</option>
                                <option value='1'>Screen 1</option>
                                <option value='2'>Screen 2</option>
                                <option value='3'>Screen 3</option>
                                <option value='4'>Screen 4</option>
                            </select>
                        </label>
                        {!screenNumberIsValid && (
                            <p className={classes['error-text']}>Screen Number cant be empty</p>
                        )}
                    </div>
                } {showingStatus === "now showing" &&
                    <div className={classes.control}>
                        <label>
                            Ticket Price
                            <select name='option' onChange={priceChangeHandler}
                            >
                                <option value="none">None</option>
                                <option value='10'>$ 10.00</option>
                                <option value='12'>$ 12.00</option>
                                <option value='15'>$ 15.00</option>
                                <option value='17'>$ 17.00</option>
                            </select>
                        </label>
                        {!priceIsValid && (
                            <p className={classes['error-text']}>Price cant be empty</p>
                        )}
                    </div>
                }

                <div className={classes['form-action']}>
                    <button
                        disabled={!formIsValid}
                    >Submit</button>
                </div>
            </form>
            {isLoading && <p style={{ color: "white", marginLeft: "300px", fontSize: "35px" }}>Loading ......</p>}
        </Fragment>
    );
}

export default AddMovie;