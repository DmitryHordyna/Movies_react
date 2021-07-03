
import { Component } from 'react'

import FilmList from '../components/FilmList/'
import {getTrendingFilms} from '../services/fetchApi'


class Home extends Component {

 
    state = {
        movies:[]
    }

   async componentDidMount() {
       const response = await getTrendingFilms()
       this.setState({ movies: response.data.results })
 
}

    render() {
        const {movies}=this.state
        return (
           
                <FilmList movies={movies} history={this.props.history}/>
          
        )
    }
}

export default Home
