import { useState } from "react";
import { Style } from "./Style";
import { useNavigate } from "react-router-dom";

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
        let token = resualt.refresh
        if (token) {
          localStorage.setItem("Token",resualt.refresh);
          localStorage.setItem("Access",resualt.access);
          navigate("/home")

        }
      })
      // .catch((err) => console.log(err));
  }
  return (
    <Style>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Code Academy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
          </div>
        </div>

        <div className="right">
          <h5>Login</h5>
          <h3>Alborz Develop part</h3>
          <div className="inputs">
            <input
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

          <div className="remember-me--forget-password">
            <label>
              <input
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                type="checkbox"
                name="item"
                checked
              />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>
          <button  onClick={post}>{loading ? "Loading...." : "Login"}</button>
        </div>
      </div>
    </Style>
  );
}
