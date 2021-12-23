import classes from './MovieForm.module.css';

const MovieForm = props => {

    const submitHandler = event => {
        event.preventDefault();

        props.onAddToCart(1);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <button style={{ marginBottom: '15px', marginTop: '7px' }} >+ Add</button>
        </form>
    );
};

export default MovieForm;