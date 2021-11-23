import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AddMovie from './Components/Movies/AddMovie';
import MoviesTemp from './Components/Movies/MoviesTemp';
import AddID from './Components/Movies/AddID';
import SearchMovie from './Components/Movies/SearchMovie';

const DUMMY_SLOTS = [
  ['8-11 AM',10.00],
  ['12-3 PM',12.00],
  ['4-7 PM',15.00],
  ['8-11 PM',17.00]
];
const DUMMY_MOVIES = [
  {
    id: "tt6341832",
    name: 'Oxygen',
    releaseDate: '2019-04-12T12:48:55.000Z',
    category:['Horror','Drama'],
    rating: 8.0,
    image: "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg"
    // 'oxygen-img'
    ,
    plot:"hfgggy",
    duration:"1 hr 11  min",
    nowShowing: 'now showing',
    tagline :" gahfsy tag line",
    theater: '3',
    timing: "8-11PM",
    capacity: 60,
    price: 10.00
  },
  // {
  //   id: "tt13429362",
  //   name: 'In the Earth',
  //   releaseDate: '2018-04-12T12:48:55.000Z',
  //   category: 'Horror',
  //   rating: 7.0,
  //   image: 'in the earth img',
  //   nowShowing: 'true',
  //   theater: '1',
  //   timing: DUMMY_SLOTS[1][0],
  //   capacity: 60,
  //   price: DUMMY_SLOTS[1][1],
  //   amount: 0
  // },
  // {
  //   id: "tt0944947",
  //   name: 'Game Of Thrones',
  //   releaseDate: '2021-04-12T12:48:55.000Z',
  //   category: 'Drama',
  //   rating: 9.0,
  //   image: 'got-img',
  //   nowShowing: 'true',
  //   theater: '2',
  //   timing: DUMMY_SLOTS[2][0],
  //   capacity: 6,
  //   price: DUMMY_SLOTS[2][1]
  // },
  // {
  //   id: "tt12263384",
  //   name: 'Extraction 2',
  //   releaseDate: '2020-04-12T12:48:55.000Z',
  //   category: 'Action',
  //   rating: 7.7,
  //   image: 'extra2 img',
  //   nowShowing: 'false',
  //   theater: null,
  //   timing: null,
  //   capacity: null
  // },
];

function App() {

  // const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const [movies,setMovies]=useState();
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const updateCapacityHandler = (id,amount) =>{
    
    const temp=movies.map((movie)=>{
      if(movie.id===id) movie.capacity=movie.capacity-amount;
      return movie;
    });
    setMovies(temp);
  };
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        'https://movie-react-16994-default-rtdb.firebaseio.com/movie.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      // console.log(responseData)
      const loadedMovies = [];

      for (const key in responseData) {
        const tempCat=[];
        responseData[key].genres.map((ele)=>{
          // console.log(ele)
          tempCat.push(ele.value)
        })

        loadedMovies.push({
          id: responseData[key].id,
          name: responseData[key].name,
          image: responseData[key].image,
          price: responseData[key].price != "none" ? parseInt(responseData[key].price):"none",
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
      setIsLoading(false);
    };

    fetchMovies().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section style={{color:"white"}}>
        <p>Loading...</p>
      </section>
    );
  }

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
      {cartIsShown && <Cart onUpdateCartCapacity={updateCapacityHandler} onClose={hideCartHandler} />}
      <Home data={movies} onUpdateCartCapacity={updateCapacityHandler} />
      <section>
      <SearchMovie />
        {/* <AddMovie 
        // onAddMovie={addMovieHandler} 
        /> */}
      </section>
      
      {/* <MoviesTemp /> */}
      <Footer />
    </CartProvider>
  );
}

export default App;