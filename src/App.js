import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Motal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/3e/b7/bf/3eb7bfb1-dc0b-2fec-5fbe-9efb8c7c8395/MatrixTrilogy4K_V_DD_KA_TT_2000x3000_300dpi_EN.jpg/268x0w.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
