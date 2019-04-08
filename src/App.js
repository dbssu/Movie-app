import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {}

    componentDidMount(){ 
      fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
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
