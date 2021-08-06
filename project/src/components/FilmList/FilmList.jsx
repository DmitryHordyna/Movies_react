import { NavLink,useLocation } from "react-router-dom"

import routes from "../../routes"

import styles from './FilmList.module.css'

const FilmList = ({ movies, query }) => {
    
const location=useLocation()

    const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png"
    const imgUrl="https://image.tmdb.org/t/p/w500/"


    return (
        <ul className={styles.MovieList}>
            {movies.map(({ id, title,poster_path }) =>
                
                <li key={id} className={styles.item}>
                    <NavLink to={{
                        pathname: `${routes.movies}/${id}`,
                        state: { id, from: location.pathname, query }
                    }}>
                        <h3 className={styles.title}>{title}</h3>
                        <img
                            src={poster_path !== null ? `${imgUrl}${poster_path}` : defaultPoster}
                            alt={title}
                            className={styles.img}
                        />
                  
                    </NavLink>
                </li>
            )}
        </ul>
    )
}
export default FilmList