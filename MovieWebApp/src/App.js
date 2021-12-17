import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import Movies from './Components/Movies/Movies';
import CartProvider from './store/CartProvider';
import SearchMovie from './Components/Movies/SearchMovie';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieData } from './store/movies-action';

function App() {

  const dispatch =useDispatch();
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


  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await fetch(
  //       'https://movie-react-16994-default-rtdb.firebaseio.com/movie.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const responseData = await response.json();
  //     const loadedMovies = [];

  //     for (const key in responseData) {
  //       const tempCat=[];
  //       responseData[key].genres.map((ele)=>{
  //         tempCat.push(ele.value)
  //       })

  //       loadedMovies.push({
  //         id: responseData[key].id,
  //         name: responseData[key].name,
  //         image: responseData[key].image,
  //         price: responseData[key].price != "none" ? parseInt(responseData[key].price):"none",
  //         plot: responseData[key].plot,
  //         rating: responseData[key].rating,
  //         capacity: responseData[key].capacity,
  //         duration: responseData[key].duration,
  //         releaseDate: responseData[key].releaseDate,
  //         nowShowing: responseData[key].showingStatus,
  //         tagline: responseData[key].tagline,
  //         theater: responseData[key].theater,
  //         timing: responseData[key].timing,
  //         category: tempCat,
  //       });
  //     }

  //     setMovies(loadedMovies);
  //     setIsLoading(false);
  //   };

  //   fetchMovies().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section style={{color:"white"}}>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  if (httpError) {
    return (
      <section style={{ color: "red" }}>
        <p >{httpError}</p>
      </section>
    );
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart 
      // onUpdateCartCapacity={updateCapacityHandler} 
      onClose={hideCartHandler} />}
      <Movies data={movies} onUpdateCartCapacity={updateCapacityHandler} />
      <SearchMovie />
      <Footer />
    </CartProvider>
  );
}

export default App;