import { Style } from "./style";
import "./index.css"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Style >
        <div className="header flex align-center space-between m-9 h-16 m-0 ">
            <div className="right">
                <div className="logo">
                    <h3 className="ml-4 text-xl">Code - Academy </h3>
                </div>
            </div>
            <div className="left mr-4">
                <button className="mr-4 text-xl">Home</button>
                <button className="mr-4 text-xl"> service</button>
                <button className="mr-4 text-xl">About</button>
                <button className="mr-4 text-xl"></button>
            <Link target="__blanck" to={"http://ins-alborz.com"}>    
             <button className="mr-4 text-xl">Deveolop</button>
             </Link> 
            </div>
        </div>
        </Style>
    )
}