import { NavLink } from "react-router-dom"

import styles from './Navigation.module.css';

import routes from "../../routes"

const Navigation = () => {
    return (
        <nav>
            <NavLink
                 to={routes.home}
                 className={styles.link}
                 activeClassName={styles.activeLink}
            >Home</NavLink>
            <NavLink
                to={routes.movies}
                className={styles.link}
                activeClassName={styles.activeLink}
            >Movies</NavLink>
        </nav>
    )
}


export default Navigation;

