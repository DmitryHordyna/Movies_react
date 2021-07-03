import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom"

import { getCastInfo } from "../services/fetchApi";

const Cast = () => {

    const history = useHistory();

    const [cast, setCast] = useState([]);
    useEffect(() => {
        getCastInfo(history.location.state.id).then((resp) =>
            setCast(resp.data.cast)
        );
    },[history.location.state.id])

    const mapCast=cast.map(({ id, name })=><li key={id}><h4>{ name}</h4></li>)
    const noCast = <li>Not found any cast</li>
    
    return (
        <div>
            <h3>Cast</h3>
            <ul>
                {cast.length>0 ? mapCast:noCast}
                
            </ul>
        </div>
    )
}
export default Cast