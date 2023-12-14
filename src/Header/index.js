import { Style } from "./style";
import "./index.css"

export default function Header() {
    return (
        <Style >
        <div className="header flex align-center space-between bg-black w-full h-16 m-0 ">
            <div className="right">
                <div className="logo">
                    <h3>Code - Academy </h3>
                </div>
            </div>
            <div className="left mr-4">
                <button>Home</button>
                <button>service</button>
                <button>About</button>
                <button>Develoop</button>
            </div>
        </div>
        </Style>
    )
}