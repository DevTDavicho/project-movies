import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utility/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails(){
    const {movieId} = useParams
    const [movies, setMovies] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    useEffect(()=>{
        get("/movies/" + movieId).then((data)=>{
            setMovies(data);
            setGeneros(data.genre_ids[0]);
        });
    }, [movieId]);

    const imageUrl = getMovieImg(movies.poster_path, 500);
    
    return(<div className="detailsContainer">
        <img src={imageUrl} alt={movies.title} className="col movieImage" />
        <div className="col detailsContainer">
            <p className="title">
                <strong> Título: </strong>
                {movies.original_title}
            </p>
            <p className="col subtitle">
                <strong> Género: </strong>
                {generos ? generos.name : 'Género desconocido'}
            </p>
            <p className="col subtitle">
                <strong> Descripción: </strong>
                {movies.overview}
            </p>
        </div>
    </div>)
}
