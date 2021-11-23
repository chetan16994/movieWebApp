import { useState, Fragment } from 'react';

const ShowSearchedMovie = props => {

    const ClickHandler = () => {
        props.addMovie(true)
        props.imdbId(props.id)
    };

    return (
        <Fragment>
            <div >
                <li>
                    <p style={{ color: "white", marginLeft: "20px", alignContent: "center" }}>{props.title}</p>
                    <p style={{ color: "white", marginLeft: "20px", alignContent: "center" }}>{props.description}</p>
                    <img
                        style={{ height: "280px", width: "241px" }}
                        src={props.image} alt="" />
                    <br />
                    <button onClick={ClickHandler} style={{ width: "100px", marginLeft: "60px", marginBottom: "30px", marginTop: "20px" }}>Add</button>
                </li>
            </div >
        </Fragment>
    );
};

export default ShowSearchedMovie;