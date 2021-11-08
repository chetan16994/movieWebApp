import MoviesList from "./MoviesList";
import {useState} from 'react';
import MoviesFilter from "./MoviesFilter";
import MoviesSort from "./MoviesSort";
import MovieShwoing from "./MovieShowing";

const Movies = (props) => {
    props.data.filter(movie =>{
        console.log("ggggg --  ", movie.timing);
    })
    

    const [filteredCategory, setFilteredCategory] = useState('');
    const [sortedCategory, setSortedCategory] = useState('');
    const [showingStatus, setShowingStatus] = useState('');


    const filterChangeHandler = (selectedCategory) => {
        setFilteredCategory(selectedCategory);
    };

    const sortedChangeHandler = (selectedSortCategory) => {
        setSortedCategory(selectedSortCategory);
    };

    const showingStatusHandler = (showingStatus) => {
        setShowingStatus(showingStatus)
        
    };

    const filteredAndSortedMovies = props.data.filter((movie) => {       
        console.log(filteredCategory)
        if (filteredCategory.length === 0 || filteredCategory==='All'){
                return props.data;
        } 
        return movie.category === filteredCategory;
    }).filter((movie) =>{
        console.log(showingStatus)
        if (showingStatus==='true')
            return movie.nowShowing === 'true';
        if (showingStatus === 'false')
            return movie.nowShowing === 'false';
        return props.data
    } )
    .sort((a,b) =>{
        if (sortedCategory === 'releaseDate'){  
            return new Date(b[sortedCategory]) - new Date(a[sortedCategory]);
        }
        return ((a[sortedCategory]) - (b[sortedCategory]));        
    });

    return (
        <div>
            <MovieShwoing 
                selectedShowingStatus={showingStatus}
                onChangeStatus={showingStatusHandler}
            />
            <MoviesFilter 
                selected={filteredCategory}
                onChangeFilter={filterChangeHandler}
            />
            <MoviesSort 
                selectedSort={sortedCategory}
                onChangeSort={sortedChangeHandler}
            />
            <MoviesList data={filteredAndSortedMovies}/>
        </div>
    )
}
export default Movies;