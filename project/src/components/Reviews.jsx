
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom"

import { getReviewsInfo } from "../services/fetchApi";

const Reviews = () => {

    const history = useHistory();

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        getReviewsInfo(history.location.state.id).then((resp) =>
            // console.log(resp.data.results)
            setReviews(resp.data.results)
        );
    },[history.location.state.id])

    const mapReviews = reviews.map(({ id, author,content ,url}) => <li key={id}>
        <h4>{author}</h4>
            <p>{content}</p>
            <img url={url} alt={author}/>
    </li>)
    const noReviews = <li>Not found any reviews</li>
    
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.length>0 ? mapReviews:noReviews}
                
            </ul>
        </div>
    )
}
export default Reviews