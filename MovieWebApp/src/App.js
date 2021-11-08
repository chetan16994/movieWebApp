import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const DUMMY_SLOTS = [
  '8-11 AM',
  '12-3 PM',
  '4-7 PM',
  '8-11 PM'
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
    timing: DUMMY_SLOTS[0],
    capacity: 60
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
    timing: DUMMY_SLOTS[1],
    capacity: 60
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
    timing: DUMMY_SLOTS[2],
    capacity: 60
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
  return (
    <Fragment>
      <Header />
      <Home data={DUMMY_MOVIES} />
      <Footer />
    </Fragment>
     
  );
}

export default App;