import userEvent from "@testing-library/user-event";
import { useState, useEffect, Fragment } from "react";
import { Style } from "./style";

export default function Homepage() {
  const [amout, setAmount] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    fetch("https://cacore.liara.run/auth/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {})
      .catch((err) => console.log(err));

    fetch("https://cacore.liara.run/bank/asset", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setAccount(result.account);
        setAmount(result.amount);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
   <Style >
    <div className="fh_card">
    <div className="card" >
      <div className="card_inner" >
        <h1>Alborz Bank</h1>
      <p className="amount">Amount:{amout}</p>
      <p className="amount">Account Number :{account}</p>
      </div>
      </div>
      </div>
   </Style>
  );
}
