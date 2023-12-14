import { Style } from "./style";
import "./index.css"

export default function LandStart() {
    return (
        <Style>
        <div id="start" className="flex">
            <div id="right">
                <img className="img" src="assets/images/BTC.jpg" />
            </div>
            <div id="left " className="mr-14" >
            <h1 className="txt-1-bold">LandigPage</h1>
            <h3 className="text-pink-700 text-4xl">Code-Academy</h3>
            <button id="sign" className="text-xl mr-5  w-44 h-11 bg-fuchsia-700 rounded-xl">Sign Up</button>
            <button id="sign" className="text-xl ml-5  w-44 h-11 bg-pink-900 rounded-xl">Sign in </button>
            </div>
        </div>
        </Style>
    )
}