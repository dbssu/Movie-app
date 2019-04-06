import React from "react";
import './Movie.css';
import PropTypes from 'prop-types';

function Movie ({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}


function MoviePoster({poster}){ // functional 컴포넌트 -> 위 class MoviePoster과 같은 역할 둘 다 img와 props를 return한다.
    return(
        <img src={poster} alt="Movie Poster"/>
    )
}

Movie.protoTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

MoviePoster.prototype = {
    poster: PropTypes.string.isRequired
}


export default Movie;