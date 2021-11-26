import MoviesList from "./MoviesList";
import {useState} from 'react';
import MoviesFilter from "./MoviesFilter";
import MoviesSort from "./MoviesSort";
import MovieShwoing from "./MovieShowing";

const Movies = (props) => {
    
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
        if (filteredCategory.length === 0 || filteredCategory==='All'){
                return props.data;
        } 
        if (movie.category.length===0) return;
        for(let i=0; i<movie.category.length;i++){
            if (movie.category[i]===filteredCategory)
                    return movie.category[i] === filteredCategory;
        }
    }).filter((movie) =>{
        if (showingStatus==='now showing')
            return movie.nowShowing === 'now showing';
        if (showingStatus === 'coming soon')
            return movie.nowShowing === 'coming soon';
        return props.data
    })
    .sort((a,b) =>{
        if (sortedCategory === 'releaseDate'){  
            return new Date(b[sortedCategory]) - new Date(a[sortedCategory]);
        }
        return ((b[sortedCategory]) - (a[sortedCategory]));        
    });

    return (
        <div className="align-movieBox">
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
            <MoviesList data={filteredAndSortedMovies} onUpdateCartCapacity={props.onUpdateCartCapacity}/>
        </div>
    )
}
export default Movies;