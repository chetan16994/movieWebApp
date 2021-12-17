import { useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';

const HeaderCartButton = props =>{
    const cartDataRedux = useSelector((state) => state.cart)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx=useContext(CartContext);

    const { items } = cartDataRedux;

    const numberOfCartItems = cartDataRedux.items.reduce((curr,item)=>{
        return curr+item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;