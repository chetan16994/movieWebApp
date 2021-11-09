import classes from './MovieShowing.module.css';

const MovieShwoing = props => {
    
    const dropDownChangeHandler = (event) => {
        props.onChangeStatus(event.target.value);
    }

    return (
        <div className={classes['movie-showing']}>
            <div className={classes['movie-showing__control']}>
                <label>Show Status </label>
                <select value={props.selectedShowingStatus} onChange={dropDownChangeHandler}>
                    <option value="" >Select a category</option>
                    <option value="">ALL</option>
                    <option value='true'>Now Showing</option>
                    <option value='false'>Coming Soon</option>
                </select>
            </div>
        </div>
    );
};

export default MovieShwoing;