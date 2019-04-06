import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {

    } //state

    componentDidMount(){ 
      setTimeout(() => {
        this.setState({
          movies: [
            {
              title: "Matrix",
              poster: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/3e/b7/bf/3eb7bfb1-dc0b-2fec-5fbe-9efb8c7c8395/MatrixTrilogy4K_V_DD_KA_TT_2000x3000_300dpi_EN.jpg/268x0w.jpg"
            },
            {
              title: "Full Metal Jacket",
              poster: "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg"
            },
            {
              title: "Oldboy",
              poster: "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg"
            },
            {
              title: "Star Wars",
              poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
            },
            {
              title: "Trainspotting",
              poster: "https://images-na.ssl-images-amazon.com/images/I/51hapGfPc9L.jpg"
            }
          ] //movie
        })
      }, 5000)
    } //componentDidMount
  
    _renderMovies = () => { // _를 쓰는 이유는 리액트 자체 기능과 나의 기능에 차이를 두기 위해서이다 !
      const movies = this.state.movies.map((movie,index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })
      return movies
    }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    ); //return
  }//render
} //class

export default App;
