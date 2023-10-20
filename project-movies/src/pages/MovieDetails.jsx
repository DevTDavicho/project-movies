import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utility/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails(){
    const {movieId} = useParams
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    useEffect(()=>{
        get("/movie/" + movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genre_ids[0]);
        });
    }, [movieId]);
    const imageUrl = getMovieImg(movie.poster_path, 500)
    
    return(<div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="col movieImage" />
        <div className="col detailsContainer">
            <p className="title">
                <strong> Título: </strong>
                {movie.original_title}
            </p>
            <p>
                <strong> Género: </strong>
                {generos ? generos.name : 'Género desconocido'}
            </p>
            <p>
                <strong> Descripción: </strong>
                {movie.overview}
            </p>
        </div>
    </div>)
}
