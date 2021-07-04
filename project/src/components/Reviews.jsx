
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom"

import { getReviewsInfo } from "../services/fetchApi";

import styles from '../styles/module/Reviews.module.css'


const Reviews = () => {

   const imgUrl="https://image.tmdb.org/t/p/w500/"

    const history = useHistory();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviewsInfo(history.location.state.id).then((resp) =>
            setReviews(resp.data.results)
        );
    }, [history.location.state.id])

    const mapReviews = reviews.map(({ id, author, content, author_details }) =>
    {
        const img = author_details.avatar_path.includes('http') ?
            author_details.avatar_path.slice(1, author_details.avatar_path.length - 1) :
            imgUrl + author_details.avatar_path;
                
 return (  <li className={styles.item} key={id}>
            <div className={styles.box}>
                         <img className={styles.img} src={img} alt={author} />
                <h4 className={styles.author}>{author}</h4>
       
            </div>
        <p className={styles.content}>{content}</p>

    </li>)
})
    
    const noReviews = <li>Not found any reviews</li>
    
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Reviews</h3>
            <ul className ={styles.reviews}>
                {reviews.length>0 ? mapReviews:noReviews}
                
            </ul>
        </div>
    )
}
export default Reviews