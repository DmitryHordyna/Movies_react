import { Component } from "react";
import { Route,Link } from "react-router-dom";

import { getFilmById } from '../services/fetchApi'
import Reviews from '../components/Reviews'
import Cast from "../components/Cast";

import routes from "../routes";

class MoviesDetailPage extends Component{

    state = {
    film:{}
    }
    
    async componentDidMount() {
        const id = this.props.location.state.id

        const response = await getFilmById(id)
        
        this.setState({film:response.data})

     
    }

    handleGoBack=()=> {

        this.props.history.push(this.props.location.state.from, { query: this.props.location.state.query})
    }

    render() {
        const {film} =this.state
        return (
            <div>
                <button type='button' onClick={this.handleGoBack}>Go Back</button>
                    <div>
                        <h3>{film.title}</h3>
                        <p>{film.overview}</p>
                </div>

                <ul>
                    <li><Link to={{
                        pathname:`${this.props.match.url}${routes.cast}`,
                        state: this.props.location.state
                    }}>Cast</Link></li>
                    <li><Link to={{
                        pathname:`${this.props.match.url}${routes.reviews}`,
                        state: this.props.location.state
                    }}>Reviews</Link></li>
                </ul>
                <Route
                    path={`${this.props.match.path}${routes.cast}`}
                    component={Cast} />
                <Route
                    path={`${this.props.match.path}${routes.reviews}`}
                    component={Reviews} />
            </div>
        )
    }
}
export default MoviesDetailPage