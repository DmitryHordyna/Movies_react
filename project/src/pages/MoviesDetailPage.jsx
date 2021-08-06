import { useState,useEffect } from "react";
import { Route,Link ,useLocation,useHistory,useRouteMatch} from "react-router-dom";

import { getFilmById } from '../services/fetchApi'
import Reviews from "../components/Reviews";
import Cast from "../components/Cast";

import routes from "../routes";

import styles from '../styles/module/MoviesDetailPage.module.css'


export default function MoviesDetailPage () {
    const location = useLocation()
    const history = useHistory()
    const match=useRouteMatch()

const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png"
        const imgUrl="https://image.tmdb.org/t/p/w500/"

    const [film, setFilm] = useState({})
    
    useEffect(() => {
        const id = location.state.id;
        getFilmById(id).then((res) => setFilm(res.data))
    })

    const  handleGoBack = () => {
       history.push(location.state.from, { query:location.state.query})
    }


return (
            <div className={styles.container}>
                <button className={styles.button} type='button' onClick={handleGoBack}><span>Go Back</span></button>
                 <div  className={styles.content}>
                      
          <h3 className={styles.title}>{film.title}</h3>
                    <div className={styles.box}>
                          <img
                        className={styles.img}
                            src={film.poster_path !== undefined ? `${imgUrl}${film.poster_path}` : defaultPoster}
                            alt={film.title}
                            style={{
                                width : '350px',
                                heigth: "250px"
                            }
                        }
                        />
                      
                  
                  </div>
                    <p className={styles.overview}>{film.overview}</p>
                 </div>

                <ul className={styles.more}>
                    <li className={styles.item}><Link className={styles.t} to={{
                        pathname:`${match.url}${routes.cast}`,
                        state: location.state
                    }}><span>Cast</span></Link></li>
                    <li className={styles.item}><Link className={styles.t} to={{
                        pathname:`${match.url}${routes.reviews}`,
                        state: location.state
                    }}><span>Reviews</span></Link></li>
                </ul>

                <Route
                    path={`${match.path}${routes.cast}`}
                    component={Cast} />
                <Route
                    path={`${match.path}${routes.reviews}`}
                    component={Reviews} />
            </div>
        )

}

// class MoviesDetailPage extends Component{

//     state = {
//     film:{}
//     }
    
//     async componentDidMount() {

//         const { location } = this.props
//         const id = location.state.id

//         const response = await getFilmById(id)
        
//         this.setState({film:response.data})

     
//     }

//     handleGoBack = () => {
//          const { location,history } = this.props

//         history.push(location.state.from, { query:location.state.query})
//     }

//     render() {
//         const { film } = this.state
//        const {match,location} = this.props

//         const defaultPoster = "https://media.comicbook.com/files/img/default-movie.png"
//         const imgUrl="https://image.tmdb.org/t/p/w500/"

//         return (
//             <div className={styles.container}>
//                 <button className={styles.button} type='button' onClick={this.handleGoBack}><span>Go Back</span></button>
//                  <div  className={styles.content}>
                      
//           <h3 className={styles.title}>{film.title}</h3>
//                     <div className={styles.box}>
//                           <img
//                         className={styles.img}
//                             src={film.poster_path !== undefined ? `${imgUrl}${film.poster_path}` : defaultPoster}
//                             alt={film.title}
//                             style={{
//                                 width : '350px',
//                                 heigth: "250px"
//                             }
//                         }
//                         />
//                         {/* <ul>
                            
//                             <li><p>{film.tagline}</p></li>
//                             <li><p>{film.budget}</p></li>
//                             <li><p>{film.vote_average}</p></li>
//                             <li><p>{film.release_date}</p></li>
//                             <li><p>During: {film.runtime } min</p></li>
//                         </ul> */}
                  
//                   </div>
//                     <p className={styles.overview}>{film.overview}</p>
//                  </div>

//                 <ul className={styles.more}>
//                     <li className={styles.item}><Link className={styles.t} to={{
//                         pathname:`${match.url}${routes.cast}`,
//                         state: location.state
//                     }}><span>Cast</span></Link></li>
//                     <li className={styles.item}><Link className={styles.t} to={{
//                         pathname:`${match.url}${routes.reviews}`,
//                         state: location.state
//                     }}><span>Reviews</span></Link></li>
//                 </ul>

//                 <Route
//                     path={`${match.path}${routes.cast}`}
//                     component={Cast} />
//                 <Route
//                     path={`${match.path}${routes.reviews}`}
//                     component={Reviews} />
//             </div>
//         )
//     }
// }
// export default MoviesDetailPage