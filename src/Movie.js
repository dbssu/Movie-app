import React from "react";
import './Movie.css';
import PropTypes from 'prop-types';

function Movie ({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
        <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Columns">
            <h1>{title}</h1>
            <div className="Movie__Genres">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <p className="Movie__Synopsis">
                {synopsis}
            </p>
        </div>
        </div>
    )
}


function MoviePoster({poster, alt}){ // functional 컴포넌트 -> 위 class MoviePoster과 같은 역할 둘 다 img와 props를 return한다.
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.protoTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.protoTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.protoTypes = {
    genre: PropTypes.string.isRequired
}


export default Movie;