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
                <span>{props.tagline}</span>
                <br />
                <span>Overview</span>
                <textarea value={props.plot} rows='7' />
                {/* <span>{props.plot}</span> */}
                <span>Rating: {props.rating}</span>
                <span>Duration: {props.duration}</span>
                {props.nowShowing === 'now showing' && <span>Show timimg: {props.timing}</span>}
                {props.nowShowing === 'now showing' && <span>Price: {props.price} $</span>}
                {props.nowShowing === 'now showing' && <span>Capacity: {props.capacity}</span>}
                {props.nowShowing === 'now showing' && <span>Screen: {props.theater}</span>}
                <span>Release Date : {props.releaseDate}</span>
                {/* <span>Screen Number : {props.screen}</span> */}
                <span>Category:  </span>
                {/* <br /> */}
                {props.category.length!=0?props.category.map((cat) => <span >{cat}, </span>):""}                
                {props.nowShowing === 'now showing' && <MovieForm id={props.id} onAddToCart={addToCartHandler} />}
                <a href="movies.html"><img src={props.image} alt="" /></a>
            </li>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler}/>}
        </div >
    );
};

export default MoviesListDisplay;