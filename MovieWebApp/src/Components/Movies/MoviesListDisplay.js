import { useContext,useState } from 'react';
import MovieForm from './MovieForm';
import CartContext from '../../store/cart-context';
import NoSeatPopUp from '../UI/NoSeatPopUP';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { moviesActions } from '../../store/movie-slice';

const MoviesListDisplay = props => {
    const dispatch=useDispatch();
    const cartDataRedux = useSelector((state) => state.cart)
    const cartCtx = useContext(CartContext);
    const [ticketAvailable, setTicketAvailable]=useState(true);
    const [showPopUP,setShowPopUp]=useState(true);

    const hidePopUpHandler =()=>{
        setShowPopUp(false);
    };

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

        //  update cart slice instead of cart context and pther 
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
                
                <i class="fa fa-trash" aria-hidden="true"></i>
                
            </li>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler}/>}
        </div >
    );
};

export default MoviesListDisplay;