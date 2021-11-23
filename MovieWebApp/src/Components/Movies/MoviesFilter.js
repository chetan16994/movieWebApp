import classes from './MovieShowing.module.css';
const MoviesFilter = props => {

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className={classes['movie-showing']}>
            <div className={classes['movie-showing__control']}>
                <label>Category </label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="" >Select a category</option>
                    <option value='All'>All Category</option>
                    <option value='Action'>Action</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='Animation'>Animation</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Sci-Fi'>Sci-Fi</option>
                    <option value='Drama'>Drama</option>
                    <option value='Horror'>Horror</option>
                </select>
            </div>
        </div>
    );
}

export default MoviesFilter;