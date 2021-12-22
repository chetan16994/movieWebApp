import { useContext, useState, Fragment, useEffect } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import NoSeatPopUp from '../UI/NoSeatPopUP';
import Checkout from './Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { moviesActions } from '../../store/movie-slice';

const Cart = props => {
    const dispatch=useDispatch();
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const cartDataRedux=useSelector((state)=>state.cart)

    const [ticketAvailable, setTicketAvailable] = useState(true);
    const [showPopUP, setShowPopUp] = useState(true);

    const totalAmount = `$${cartDataRedux.totalAmount.toFixed(2)}`;
    const hasItems = cartDataRedux.items.length > 0;

    const hidePopUpHandler = () => {
        setShowPopUp(false);
    };

    const cartItemRemoveHandler = (item) => {
        dispatch(cartActions.removeItemFromCart(item.id))
        dispatch(moviesActions.increaseCapacity(item.id));
        console.log(cartDataRedux, " cartData redux")
        console.log(item)
        // item.capacity = item.capacity + 1;
        // props.onUpdateCartCapacity(item.id, -1);
        // cartCtx.removeItem(item);
    };

    const cartItemAddHandler = (item) => {
        
        if (item.capacity > 0) {
            dispatch(moviesActions.decreaseCapacity(item.id));
            dispatch(cartActions.addItemToCart(item))
            // item.capacity = item.capacity - 1;
            // cartCtx.addItem({ ...item, amount: 1 });
            // props.onUpdateCartCapacity(item.id, 1);
        } else {
            setShowPopUp(true);
            setTicketAvailable(false);
        }
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://movie-e96e8-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartDataRedux,
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartActions.replaceCart();
    };

    

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartDataRedux.items.map((item) => (

                //  const price = `$${props.price.toFixed(2)}`;

            
            // <li className={classes['cart-item']}>
            //     <div>
            //         <h2>{props.name}</h2>
            //         <h4>Show Time : {item.timing}</h4>
            //         <h4>Screen : {item.theater}</h4>
            //             <h4>capacity : {item.capacity}</h4>
            //         <div className={classes.summary}>
            //                 <span className={classes.price}>$ {item.price}</span>
            //                 <span className={classes.amount}>x {item.amount}</span>
            //         </div>
            //     </div>
            //     <div className={classes.actions}>
            //             <button onClick={cartItemRemoveHandler}>−</button>
            //             <button onClick={cartItemAddHandler}>+</button>
            //     </div>
            // </li>


                <CartItem
                    key={item.id}
                    name={item.name}
                    timing={item.timing}
                    theater={item.theater}
                    capacity={item.capacity}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <Fragment>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler} />}
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={classes.total} >
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
                {!isCheckout && modalActions}
            </Modal>
        </Fragment>
    );
    
    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;