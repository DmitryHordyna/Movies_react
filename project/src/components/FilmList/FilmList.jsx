import { NavLink } from "react-router-dom"

import routes from "../../routes"

import styles from './FilmList.module.css'

const FilmList = ({ movies, history, query }) => {
    
    const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png"
    const imgUrl="https://image.tmdb.org/t/p/w500/"


    return (
        <ul className={styles.MovieList}>
            {movies.map(({ id, title,poster_path }) =>
                
                <li key={id}>
                    <NavLink to={{
                        pathname: `${routes.movies}/${id}`,
                        state: { id, from: history.location.pathname, query }
                    }}>
                        <h3>{title}</h3>
                        <img
                            src={poster_path !== null ? `${imgUrl}${poster_path}` : defaultPoster}
                            alt={title}
                            style={{
                                width : '350px',
                                heigth:"250px"
                            }
                        }
                        />
                  
                    </NavLink>
                </li>
            )}
        </ul>
    )
}
export default FilmList