import { useState } from "react";
import { Style } from "./Style";
import { useNavigate } from "react-router-dom";
import "./index.css";

let ali = document.getElementsByClassName("int").value;
export default function Login() {
  const [userName, setUser] = useState();
  const [pas, setPasCode] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  function post() {
    setLoading(true);

    var data = JSON.stringify({
      email: userName,
      password: pas,
    });
    fetch("https://cacore.liara.run/auth/jwt/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
    .then((response) => response.json())
      .then((resualt) => {
        setLoading(false);
        let token = resualt.refresh;
        if (token) {
          
          alert("Login sucesss");
          localStorage.setItem("Token", resualt.refresh);
          localStorage.setItem("Access", resualt.access);
          navigate("/home");
        } else {
          alert("Login failed");
          fail()
        }
        function fail() {
          return (
            <div className="aler-form">
              <p>Login failed</p>
            </div>
          )
        }
      });
  }
  return (
    <Style>
      <div className="box-form">
        <div className="left-2">
          <div className="overlay">
            <h1>Code Academy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
          </div>
        </div>

        <div className="right-2">
          <h5>Login</h5>
          <h3>Alborz Develop part</h3>
          <div className="inputs">
            <input
              className="int"
              type="text"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              placeholder="user name"
            />

            <input
              type="password"
              onChange={(e) => {
                setPasCode(e.target.value);
              }}
              placeholder="password"
            />
          </div>
          <button className="btn bg-cyan-500 " onClick={post}>
            {loading ? "Loading...." : "Login"}
          </button>
        </div>
      </div>
    </Style>
  );
}
