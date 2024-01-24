import { Style } from "./style";
import "./index.css"
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    return (
        <Style >
        <div className="header flex align-center space-between ">
            <div className="right">
                <div className="logo">
                    <h3 className="ml-4 text-xl ali">Code - Academy </h3>
                </div>
            </div>
            <div className="left flex mr-4">
                <button onClick={() => {navigate("/")}} className="mr-4 text-xl">Home</button>
                <button className="mr-4 text-xl"> service</button>
                <button onClick={()  => { navigate("/action")}}  className="mr-4 text-xl">Transaction</button>
            <Link target="__blanck" to={"http://ins-alborz.com"}>    
             <button className="mr-4 text-xl">Develop</button>
             </Link> 
            </div>
        </div>
        </Style>
    )
}