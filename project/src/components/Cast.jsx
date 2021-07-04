import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom"

import { getCastInfo } from "../services/fetchApi";

import styles from '../styles/module/Cast.module.css'

const Cast = () => {

    const imgUrl = "https://image.tmdb.org/t/p/w500/"
    const defaultAvatat='https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'

    const history = useHistory();

    const [cast, setCast] = useState([]);
    useEffect(() => {
        getCastInfo(history.location.state.id).then((resp) =>
            setCast(resp.data.cast)
        );
    },[history.location.state.id])

    const mapCast = cast.map(({ id, name, profile_path }) => {
        const img = profile_path !== null ? imgUrl + profile_path :
            defaultAvatat
        return (
            <li className={styles.item} key={id}>
   
                <img className={styles.img} src={img} alt={name} />
                     <h4 className={styles.name}>{name}</h4>
            </li>)
    })
    const noCast = <li>Not found any cast</li>
    
    return (
        <div>
            <h3 className={styles.title}>Cast</h3>
            <ul className={styles.list}>
                {cast.length>0 ? mapCast:noCast}
                
            </ul>
        </div>
    )
}
export default Cast