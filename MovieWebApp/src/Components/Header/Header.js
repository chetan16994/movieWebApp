import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";



const Header = (props) => {
    return (
        <Fragment>
            <div>
                <div id="header" className="header-fixed">
                    <div>
                        <ul>
                            <li className="selected">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="movies.html">Movies</a>
                                <ul>
                                    <li>
                                        <a href="#">Now Showing</a>
                                    </li>
                                    <li>
                                        <a href="#">Coming Soon</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="ticket-info.html">Ticket Info</a>
                            </li>
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                        </ul>
                        <HeaderCartButton onClick={props.onShowCart} />
                    </div>
                    
                </div>
            </div>

        </Fragment>
    );
};

export default Header;