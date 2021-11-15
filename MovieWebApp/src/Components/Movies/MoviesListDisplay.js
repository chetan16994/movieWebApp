import { useContext,useState } from 'react';
import MovieForm from './MovieForm';
import CartContext from '../../store/cart-context';
import NoSeatPopUp from '../UI/NoSeatPopUP';


const MoviesListDisplay = props => {

    const cartCtx = useContext(CartContext);
    // const price = `$${props.price.toFixed(2)}`;

    const [ticketAvailable, setTicketAvailable]=useState(true);
    const [showPopUP,setShowPopUp]=useState(true);

    const hidePopUpHandler =()=>{
        setShowPopUp(false);
    };

    const addToCartHandler = (amount) => {
        {console.log(ticketAvailable)}
        if(props.capacity>0){
        props.onUpdateCartCapacity(props.id, amount);
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            theater: props.theater,
            capacity: props.capacity - 1,
            timing: props.timing
        });
        }else{
            setShowPopUp(true);
            setTicketAvailable(false);
        }
    };
    return (
        <div>
            <li>
                <h2>{props.name}</h2>
                <span>Rating: {props.rating}</span>
                {props.nowShowing === 'true' && <span>Show timimg: {props.timing}</span>}
                {props.nowShowing === 'true' && <span>Price: {props.price} $</span>}
                {props.nowShowing === 'true' && <span>Capacity: {props.capacity}</span>}
                <span>Release Date : {props.releaseDate.substring(0, 10)}</span>
                {/* <span>Screen Number : {props.screen}</span> */}
                <span>Category: {props.category}</span>
                {props.nowShowing === 'true' && <MovieForm id={props.id} onAddToCart={addToCartHandler} />}
                <a href="movies.html"><img src={`images/${props.image}.jpg`} alt="" /></a>
            </li>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler}/>}
        </div >
    );
};

export default MoviesListDisplay;