import './MovieSort.css';
const MoviesSort = props => {

    const dropDownSortChangeHandler = (event) => {
        props.onChangeSort(event.target.value);
    }

    return (
        <div className='movie-sort'>
            <div className='movie-sort__control'>
                <label>Sort </label>
                <select value={props.selected} onChange={dropDownSortChangeHandler}>
                    <option value="" >Select a category</option>
                    <option value='rating'>Ratings</option>
                    <option value='releaseDate'>Release Date</option>
                </select>
            </div>
        </div>
    );
};
export default MoviesSort;