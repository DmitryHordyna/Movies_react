import { NavLink } from "react-router-dom"

import routes from "../../routes"

import styles from './FilmList.module.css'

const FilmList = ({ movies, history,query }) => {
    return (
        <ul className={styles.MovieList}>
            {movies.map(({ id, title }) =>
                <li key={id}>
                    <NavLink to={{
                        pathname: `${routes.movies}/${id}`,
                        state: { id, from: history.location.pathname ,query}
                    }}><h3>{title}</h3></NavLink>
                </li>
            )}
        </ul>
    )
}
export default FilmList