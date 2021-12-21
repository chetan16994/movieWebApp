import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <Fragment>
            <div>
                <div id="header" className="header-fixed">
                    <div>
                        <ul>
                            <li>
                            <NavLink className="selected" to="/">
                                Home
                            </NavLink>
                            </li>
                            {/* <li className="selected">
                                <a href="index.html">Home</a>
                            </li> */}
                            <li>
                            <NavLink className="selected" to="/search-movies">
                                Search Movies
                            </NavLink>
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