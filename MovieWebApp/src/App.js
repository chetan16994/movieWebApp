import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';

const DUMMY_MOVIES= [
  {
    id: 1,
    name:'Oxygen',
    releaseDate: '2019-04-12T12:48:55.000Z',
    category:'Horror',
    rating:8.0,
    image: 'oxygen-img'
  },
  {
    id: 2,
    name: 'In the Earth',
    releaseDate: '2018-04-12T12:48:55.000Z',
    category: 'Horror',
    rating: 7.0,
    image: 'in the earth img'
  },
  { 
    id: 3,
    name: 'Game Of Thrones',
    releaseDate: '2021-04-12T12:48:55.000Z',
    category: 'Drama',
    rating: 9.0,
    image: 'got-img'
  },
  {
    id: 4,
    name: 'Extraction 2',
    releaseDate: '2020-04-12T12:48:55.000Z',
    category: 'Action',
    rating: 7.7,
    image: 'extra2 img'
  },
];

function App() {
  return (
    <Home data={DUMMY_MOVIES}/>
  );
}

export default App;