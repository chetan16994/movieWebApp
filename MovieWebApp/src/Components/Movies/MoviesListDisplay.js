import { useContext } from 'react';
import MovieForm from './MovieForm';
import CartContext from '../../store/cart-context';

const MoviesListDisplay = props => {

    const cartCtx = useContext(CartContext);
    // const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        props.onUpdateCartCapacity(props.id, amount);
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            theater: props.theater,
            // --------------bug------------------
            capacity: props.capacity - 1,
            timing: props.timing
        });
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
        </div >
    );
};

export default MoviesListDisplay;