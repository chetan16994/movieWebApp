import MoviesList from "./MoviesList";
import {useState} from 'react';
import MoviesFilter from "./MoviesFilter";
import MoviesSort from "./MoviesSort";

const Movies = (props) => {

    const [filteredCategory, setFilteredCategory] = useState('');

    const [sortedCategory, setSortedCategory] = useState('');

    const filterChangeHandler = (selectedCategory) => {
        setFilteredCategory(selectedCategory);
    };

    const sortedChangeHandler = (selectedSortCategory) => {
        setSortedCategory(selectedSortCategory);
    };

    const filtereAndSorteddMovies = props.data.filter((movie) => {
        if(filteredCategory.length===0){
                return props.data;
        } 
        return movie.category === filteredCategory;
    }
    ).sort((a,b) =>{
        if (sortedCategory === 'releaseDate'){  
            return new Date(b[sortedCategory]) - new Date(a[sortedCategory]);
        }
        return ((a[sortedCategory]) - (b[sortedCategory]));        
    });

    return (
        <div>
            <MoviesFilter 
                selected={filteredCategory}
                onChangeFilter={filterChangeHandler}
            />
            <MoviesSort 
                selectedSort={sortedCategory}
                onChangeSort={sortedChangeHandler}
            />
            <MoviesList data={filtereAndSorteddMovies}/>
        </div>
    )
}
export default Movies;