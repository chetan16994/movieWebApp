import { useState } from 'react';
import MovieForm from './MovieForm';
import NoSeatPopUp from '../UI/NoSeatPopUP';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { moviesActions } from '../../store/movie-slice';
 import { deleteMovie } from '../../store/movies-action';
import classes from './MoviesListDisplay.module.css';

const MoviesListDisplay = props => {
    const movieData = useSelector((state) => state.movies.movies);
    const dispatch=useDispatch();
    const [ticketAvailable, setTicketAvailable]=useState(true);
    const [showPopUP,setShowPopUp]=useState(true);

    const hidePopUpHandler =()=>{
        setShowPopUp(false);
    };

    // const deleteHandler = () =>{
    //     dispatch(deleteMovie(props.id, movieData));
    // };

    const addToCartHandler = () => {
        const item = {
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price,
            theater: props.theater,
            capacity: props.capacity,
            timing: props.timing
        };

        if(props.capacity>0){
            dispatch(cartActions.addItemToCart(item));
            dispatch(moviesActions.decreaseCapacity(item.id));
     
        }else{
            setShowPopUp(true);
            setTicketAvailable(false);
        }
    };
    return (
        <div>
            <li >
                <div>
                    <h2 className="test">{props.name}</h2>
                    <span>{props.tagline}</span>
                    <a className="test1" href="movies.html"><img className="testimage" src={props.image} alt="" /></a>
                </div>
                <br />
                <span>Overview</span>
                <textarea value={props.plot} rows='7' />
                
                <span ><strong className="r-bg">Rating: {props.rating}</strong></span>
                <span>Duration: {props.duration}</span>
                {props.nowShowing === 'now showing' && <span>Show timimg: {props.timing}</span>}
                {props.nowShowing === 'now showing' && <span>Price: {props.price} $</span>}
                {props.nowShowing === 'now showing' && <span>Capacity: {props.capacity}</span>}
                {props.nowShowing === 'now showing' && <span>Screen: {props.theater}</span>}
                <span>Release Date : {props.releaseDate}</span>
                <span>Category:  </span>
                {props.category.length!==0?props.category.map((cat) => <span >{cat}, </span>):""}                
                {props.nowShowing === 'now showing' && <MovieForm id={props.id} onAddToCart={addToCartHandler} />}
                {/* <button className={classes.button}>Edit  </button>
                <button className={classes.button} onClick={deleteHandler}>  Delete</button> */}
            </li>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler}/>}
        </div >
    );
};

export default MoviesListDisplay;