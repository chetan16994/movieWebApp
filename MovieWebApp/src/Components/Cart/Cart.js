import { useContext, useState, Fragment } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import NoSeatPopUp from '../UI/NoSeatPopUP';

const Cart = props => {

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
    return (
        <Fragment>
            {!ticketAvailable && showPopUP && <NoSeatPopUp onClose={hidePopUpHandler} />}
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={classes.total} >
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                    {/* {!ticketAvailability && <p style={{background:'red'}}>No more tickets</p>} */}
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>
                        Close
                    </button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </Modal>
        </Fragment>
    );
};

export default Cart;