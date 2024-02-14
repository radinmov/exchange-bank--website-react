import { useEffect, useState } from "react";
import { Style } from "./Style";
// pushing a image for class   192.168.100.6
// excersize for code-academy in class 
export default function Image() {
    const [file , setFile] =useState();
    const [images , setImages]  =useState([]);
    
    const loadData = () => {

        fetch("http://192.168.100.6:4000/images")
        .then(d => d.json())
        .then(r => setImages(r))
        .catch(err => console.log(err))
    }
    const sendData = ()=> {
        let data = new FormData();
        data.append('image' , file)
        fetch("http://192.168.100.6:4000/images" , {
            method:"POST",
            body:data
        })
        .then(r => r.json())
        .then(res => console.log(res))
    }

    useEffect(() => {
        loadData();
    })

    return (
        <Style>
            <input className="" onChange={(e) => setFile(e.target.files[0])} type="file" />
            <button className="name" onClick={sendData}></button>
            {
                images.length > 0 && images.map((item) => {
                    return(
                        <div>
                            <img className="w-52 flex"  src={`http://192.168.100.6:4000/${item.image.url}`} />
                        </div>
                    )
                })
            }
        </Style>
    )
}