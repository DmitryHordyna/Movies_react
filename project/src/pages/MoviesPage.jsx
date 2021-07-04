import { Component } from "react";

import {getFilmsByQuery} from '../services/fetchApi'
import FilmList from "../components/FilmList/FilmList";

import styles from '../styles/module/MoviesPage.module.css'

class MoviesPage extends Component{
    state = {
        query: '',
        film: [],
        
    }
    

    async componentDidMount() {
const {location}=this.props

       if (location.state !== null) {
           const currentQuery = location.state.query
           const response = await getFilmsByQuery(currentQuery)
           
           this.setState({
               film: response.data.results,
               query: currentQuery
           })
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { query } = this.state
        
        const responce = await getFilmsByQuery(query)
        this.setState({ film:responce.data.results})

    }

    handleChange = (e) => {

    this.setState({query:e.target.value})
    }

    render() {
        const { query, film } = this.state
        const { history } = this.props
        
        return (
            <div className={styles.container}>
                <form className={styles.form}
                    onSubmit={this.handleSubmit}>
                    <input
                        className={styles.input}
                        onChange={this.handleChange}
                        type='text'
                        value={query}/>
                    <button className={styles.button}><span>Search</span></button>
                </form>
                
                <FilmList movies={film} history={history} query={query}/>
            </div>)
    }
}

export default MoviesPage