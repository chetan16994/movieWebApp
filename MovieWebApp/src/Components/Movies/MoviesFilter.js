import './MovieFilter.css';

const MoviesFilter = props => {

    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='movie-filter'>
            <div className='movie-filter__control'>
                <label>Filter </label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value="" >Select a category</option>
                    <option value='Action'>Action</option>
                    <option value='Drama'>Drama</option>
                    <option value='Horror'>Horror</option>
                </select>
            </div>
        </div>
    );
}

export default MoviesFilter;