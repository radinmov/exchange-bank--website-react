import { Link } from "react-router-dom";
import { Style } from "./style";
import { useNavigate } from "react-router-dom";
import useTitle from "../Hook/useTitle";
export default function NotFound() {
  const navigate = useNavigate();
  const title = useTitle("NotFound(404)");

  return (
    <Style>
      <div id="error-page">
        <div className="content">
          <h2 className="header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">
            Opps! Page not found
            <h2>Code-Academy Develop part</h2>
          </h4>

          <p>Alborz Develop part </p>

          <div className="btns">
            <button
              className="btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Return to Login{" "}
            </button>
            <button
              className="btn"
              onClick={() => {
                navigate("/home");
              }}
            >
              Return to Homepage{" "}
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}
