import PropTypes from "prop-types";
import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(<li className={styles.MovieCard}>
        <Link to={"/movies/" + movie.id}>
            <img width={230} height={345} src={imageUrl} alt={movie.title} className="movieImage" />
            <div className={styles.title}>{ movie.title}</div>
        </Link>
    </li>);
}

// Define la validación de tipo para la propiedad 'movie'
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired, // Cambia 'object' al tipo correcto de 'movie' si es necesario
};