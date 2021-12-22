import React, { useState, useEffect, Fragment, Suspense, useContext   } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Movies from './Components/Movies/Movies';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from './store/movies-action';
import AuthContext from './store/auth-context';

const SearchMovie = React.lazy(() => import('./Components/Movies/SearchMovie') );
const AuthForm = React.lazy(() => import('./Auth/AuthForm'));
const ProfileForm = React.lazy(() => import('./Components/Profile/ProfileForm'));

function App() {

  const dispatch =useDispatch();
  const authCtx = useContext(AuthContext);
  const responseData = useSelector((state) => state.movies.movies  );
  // const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [movies,setMovies]=useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const updateCapacityHandler = (id) =>{
    
    const temp=movies.map((movie)=>{
      if(movie.id===id) movie.capacity=movie.capacity-1;
      return movie;
    });
    setMovies(temp);
  };

  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);
  
  useEffect(()=>{
    const loadedMovies = [];
    for (const key in responseData) {
      const tempCat = [];
      responseData[key].genres.map((ele) => {
        tempCat.push(ele.value)
      })

      loadedMovies.push({
        id: responseData[key].id,
        name: responseData[key].name,
        image: responseData[key].image,
        price: responseData[key].price != "none" ? parseInt(responseData[key].price) : "none",
        plot: responseData[key].plot,
        rating: responseData[key].rating,
        capacity: responseData[key].capacity,
        duration: responseData[key].duration,
        releaseDate: responseData[key].releaseDate,
        nowShowing: responseData[key].showingStatus,
        tagline: responseData[key].tagline,
        theater: responseData[key].theater,
        timing: responseData[key].timing,
        category: tempCat,
      });
    }
    
    setMovies(loadedMovies);
  }, [responseData]);
  
  if (httpError) {
    return (
      <section style={{ color: "red" }}>
        <p >{httpError}</p>
      </section>
    );
  }
  console.log(authCtx.email," emaill")

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
     
      {cartIsShown && <Cart
        // onUpdateCartCapacity={updateCapacityHandler} 
        onClose={hideCartHandler} />}
      <Suspense
        fallback={
          <p>Loading .... </p>
        }
      >
    <Routes>
         
      <Route path="/" element={<Movies data={movies} onUpdateCartCapacity={updateCapacityHandler} />} />

          {authCtx.isLoggedIn && authCtx.email ==="chetan.birthare@aggiemail.usu.edu" && (
      <Route path="/search-movies" element={<SearchMovie />} />
          )}

      <Route path="/auth" element={<AuthForm />} />

          {authCtx.isLoggedIn && (
      <Route path="/profile" element={<ProfileForm />} />
          )}

    </Routes>
    </ Suspense>
      <Footer />
    </Fragment>
  );
}

export default App;