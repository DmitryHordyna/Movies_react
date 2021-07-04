
import { Component } from 'react'

import FilmList from '../components/FilmList/'
import {getTrendingFilms} from '../services/fetchApi'

import styles from '../styles/module/Home.module.css'

class Home extends Component {

 
    state = {
        movies:[]
    }

   async componentDidMount() {
       const response = await getTrendingFilms()
       this.setState({ movies: response.data.results })
 
}

    render() {
        const { movies } = this.state
        const { history } = this.props
        
        return (<div className={styles.container}>
            <h2 className={styles.title}>Tranding today</h2>
            <FilmList movies={movies} history={history} />
        </div>
        )
    }
}

export default Home
