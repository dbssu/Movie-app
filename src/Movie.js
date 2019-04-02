import React, { Component  } from "react";
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg"/>
        )
    }
}
export default Movie;