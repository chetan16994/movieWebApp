const HomeFooter = () => {
    return(
        <div>
            <div id="footer">
                <div>
                    <div>
                        <span>Quick Links</span>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="ticket-info.html">Ticket Info</a>
                            </li>
                            <li>
                                <a href="movies.html">Now Showing</a>
                            </li>
                            <li>
                                <a href="rentals.html">Rentals</a>
                            </li>
                            <li>
                                <a href="about.html">Contact</a>
                            </li>
                            <li>
                                <a href="movies.html">Comming Soon</a>
                            </li>
                            <li>
                                <a href="about.html">The Company</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <span>Recent Tweets</span>
                        <ul>
                            <li>
                                <p>
                                    Sed id mattis tellus. Proin egestas velit vel neque placerat sed interdum neque porta.
                                </p>
                                {/* <span><a href="#">- 1 day ago</a></span> */}
                            </li>
                            <li>
                                <p>
                                    Praesent at urna ac urna congue convallis.
                                </p>
                                {/* <span><a href="#">- 2 day ago</a></span> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span>Sign Up For Our Mailing List</span>
                        <p>
                            Praesent at urna ac urna congue convallis. Maecenas sed placerat turpis. Duis in dolor ut nibh molestie faucibus.
                        </p>
                        <form action="about.html">
                            {/* <input type="text" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'Enter Email Address Here':this.value;" value="Enter Email Address Here" /> */}
                            <input type="submit" value="" />
                        </form>
                    </div>
                    <p>
                        &#169; 2023 Cinema Theatre
                    </p>
                    <div className="connect">
                        <span>Stay Connected: </span> <a href="http://freewebsitetemplates.com/go/facebook/" id="facebook">facebook</a> <a href="http://freewebsitetemplates.com/go/twitter/" id="twitter">twitter</a> <a href="http://freewebsitetemplates.com/go/googleplus/" id="googleplus">google+</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooter;