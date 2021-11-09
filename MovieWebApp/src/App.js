import { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

const DUMMY_SLOTS = [
  ['8-11 AM',10.00],
  ['12-3 PM',12.00],
  ['4-7 PM',15.00],
  ['8-11 PM',17.00]
];
const DUMMY_MOVIES = [
  {
    id: 1,
    name: 'Oxygen',
    releaseDate: '2019-04-12T12:48:55.000Z',
    category: 'Horror',
    rating: 8.0,
    image: 'oxygen-img',
    nowShowing: 'true',
    theater: '3',
    timing: DUMMY_SLOTS[0][0],
    capacity: 60,
    price: DUMMY_SLOTS[0][1]
  },
  {
    id: 2,
    name: 'In the Earth',
    releaseDate: '2018-04-12T12:48:55.000Z',
    category: 'Horror',
    rating: 7.0,
    image: 'in the earth img',
    nowShowing: 'true',
    theater: '1',
    timing: DUMMY_SLOTS[1][0],
    capacity: 60,
    price: DUMMY_SLOTS[1][1]
  },
  {
    id: 3,
    name: 'Game Of Thrones',
    releaseDate: '2021-04-12T12:48:55.000Z',
    category: 'Drama',
    rating: 9.0,
    image: 'got-img',
    nowShowing: 'true',
    theater: '2',
    timing: DUMMY_SLOTS[2][0],
    capacity: 60,
    price: DUMMY_SLOTS[2][1]
  },
  {
    id: 4,
    name: 'Extraction 2',
    releaseDate: '2020-04-12T12:48:55.000Z',
    category: 'Action',
    rating: 7.7,
    image: 'extra2 img',
    nowShowing: 'false',
    theater: null,
    timing: null,
    capacity: null
  },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const updateCapacityHandler = () =>{
      console.log("update capacity");
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Home data={DUMMY_MOVIES} onAddCartCapacity={updateCapacityHandler} />
      <Footer />
    </CartProvider>

  );
}

export default App;