import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
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
  }
]

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {
      greeting: 'hello!'
    }

    componentDidMount(){
      setTimeout(() =>{
        this.setState({
          greeting: 'hello again'
        })
      },2000)
    }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
