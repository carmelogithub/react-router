import { useParams } from "react-router-dom";


function Ciudad(){
    const {ciudad}=useParams();
    return(
        <div>
            <h2>Bienvenido a {ciudad}</h2>
        </div>
    );
}
export default Ciudad;