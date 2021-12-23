import { Fragment , useContext} from "react";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
    };
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
                            {authCtx.isLoggedIn && authCtx.email === "chetan.birthare@aggiemail.usu.edu" &&
                            <li>
                            <NavLink className="selected" to="/search-movies">
                                Search Movies
                            </NavLink>
                            </li>
                            }
                            {!authCtx.isLoggedIn &&  
                            <li>
                            <NavLink className="selected" to="/auth">
                                Login
                            </NavLink>
                                </li>
                            }
                            {authCtx.isLoggedIn &&
                                <li>
                                    <NavLink className="selected" to="/profile">
                                    Profile
                                </NavLink>
                                </li>
                            }
                            {authCtx.isLoggedIn &&  
                                <li>
                                    <a onClick={logoutHandler}>Logout</a>
                                </li>
                            }           
                        </ul>
                        <HeaderCartButton onClick={props.onShowCart} />
                    </div>
                    
                </div>
            </div>

        </Fragment>
    );
};

export default Header;