const HomeHeader = () =>{
    return(
        <div>
            <div id="header">
                <div>
                    <a href="index.html" id="logo"><img src="images/logo.png" alt="" /></a>
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
                                    <a href="#">Comming Soon</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="ticket-info.html">Ticket Info</a>
                        </li>
                        {/* <li>
                            <a href="rentals.html">Rentals</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li> */}
                        <li>
                            <a href="blog.html">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;