import { Component } from "react";

import {getFilmsByQuery} from '../services/fetchApi'
import FilmList from "../components/FilmList/FilmList";

class MoviesPage extends Component{
    state = {
        query: '',
        film: [],
        
    }
    

    async componentDidMount() {

       if (this.props.location.state !== null) {
       const currentQuery=this.props.location.state.query
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
        const {query,film}=this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type='text'
                        value={ query}/>
                    <button>Search</button>
                </form>
                
                <FilmList movies={film} history={this.props.history} query={ query}/>
            </>)
    }
}

export default MoviesPage