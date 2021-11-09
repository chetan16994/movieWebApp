import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props =>{
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: '1', name: 'Oxygen', theater: 2, timing: 12.99 ,capacity:60}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    );
};

export default Cart;