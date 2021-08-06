import { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";


import {getFilmsByQuery} from '../services/fetchApi'
import FilmList from "../components/FilmList/FilmList";

import styles from '../styles/module/MoviesPage.module.css'

export default function MoviesPage() {
    const location = useLocation()


    const [query, setQuery] = useState('')
    const [film, setFilm] = useState([])

    useEffect(() => {
        if (location.state !== null) {
            const currentQuery = location.state.query
            getFilmsByQuery(currentQuery).then(res => {
                setFilm(res.data.results);
                   setQuery(currentQuery)
           })
        }
    })

    const   handleSubmit = async e => {
        e.preventDefault()
        
        const responce = await getFilmsByQuery(query)
        setFilm(responce.data.results)
    }
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

return (
            <div className={styles.container}>
                <form className={styles.form}
                    onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        onChange={handleChange}
                        type='text'
                        value={query}/>
                    <button className={styles.button}><span>Search</span></button>
                </form>
                
                <FilmList movies={film}  query={query}/>
            </div>)


}

// class MoviesPage extends Component{
//     state = {
//         query: '',
//         film: [],
        
//     }
    

//     async componentDidMount() {
// const {location}=this.props

//        if (location.state !== null) {
//            const currentQuery = location.state.query
//            const response = await getFilmsByQuery(currentQuery)
           
//            this.setState({
//                film: response.data.results,
//                query: currentQuery
//            })
//         }
//     }

//     handleSubmit = async e => {
//         e.preventDefault()
//         const { query } = this.state
        
//         const responce = await getFilmsByQuery(query)
//         this.setState({ film:responce.data.results})

//     }

//     handleChange = (e) => {

//     this.setState({query:e.target.value})
//     }

//     render() {
//         const { query, film } = this.state
//         const { history } = this.props
        
//         return (
//             <div className={styles.container}>
//                 <form className={styles.form}
//                     onSubmit={this.handleSubmit}>
//                     <input
//                         className={styles.input}
//                         onChange={this.handleChange}
//                         type='text'
//                         value={query}/>
//                     <button className={styles.button}><span>Search</span></button>
//                 </form>
                
//                 <FilmList movies={film} history={history} query={query}/>
//             </div>)
//     }
// }

// export default MoviesPage