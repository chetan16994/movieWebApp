import { useContext, useState, Fragment } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import NoSeatPopUp from '../UI/NoSeatPopUP';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const [ticketAvailable, setTicketAvailable] = useState(true);
    const [showPopUP, setShowPopUp] = useState(true);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const hidePopUpHandler = () => {
        setShowPopUp(false);
    };

    const cartItemRemoveHandler = (item) => {
        item.capacity = item.capacity + 1;
        props.onUpdateCartCapacity(item.id, -1);
        cartCtx.removeItem(item);
    };

    const cartItemAddHandler = (item) => {

        if (item.capacity > 0) {
            item.capacity = item.capacity - 1;
            cartCtx.addItem({ ...item, amount: 1 });
            props.onUpdateCartCapacity(item.id, 1);
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
        await fetch('https://movie-react-16994-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
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