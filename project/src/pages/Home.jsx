
import { useState,useEffect} from 'react'

import FilmList from '../components/FilmList/'
import {getTrendingFilms} from '../services/fetchApi'

import styles from '../styles/module/Home.module.css'

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingFilms().then(res => {
            console.log("a");
           setMovies(res.data.results) 
        })
      
    },[])


   return (<div className={styles.container}>
       <h2 className={styles.title}>Tranding today</h2>
       <FilmList movies={movies} />
        </div>
        ) 
}
