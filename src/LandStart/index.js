import { Style } from "./style";
import "./index.css"
import { useNavigate } from "react-router-dom";

export default function LandStart() {
    const navigate = useNavigate();
    return (
        <Style>
        <div id="start" className="flex">
            <div id="right">
                <img className="img" src="assets/images/BTC.jpg" />
            </div>
            <div id="left " className="mr-14" >
            <h1 className="txt-1-bold">LandigPage</h1>
            <h3 className="text-pink-700 text-4xl">Code-Academy</h3>
            <button onClick={() => {navigate("/Login")}} id="sign" className=" btn text-xl mr-5  w-44 h-14 bg-blue-700 rounded-xl scale-90">Sign Up</button>
            <button onClick={() => {navigate("/Login")}} id="sign" className=" btn text-xl ml-5  w-44 h-14 bg-blue-700 rounded-xl scale-90">Sign in </button>
            </div>
        </div>
        </Style>
    )
}