import { useState } from "react";
import { Style } from "./Style";
import useTitle from "../../componets/Hook/useTitle";
import Header from "../../componets/Header";



export default function Action() {
  const title =  useTitle('Transaction')
  const [amount, setAmount] = useState();
  const [destination, setDestination] = useState();

  function postData() {
    var data = JSON.stringify({
      amount: amount,
      destination_account: destination,
    });

    fetch("https://cacore.liara.run/bank/transactions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Style>
      <Header />
      <div className="container_fh" >
      <div className="container-2">
        <div className="container_inner">
          <p className="txt">Transaction page </p>
          <input
            inputmode="numeric"
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter the amount"
          />
          <input
            type="number"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            placeholder="Enter Destianmn account"
          />
          <button className="btn_ac" onClick={postData}>Transfer</button>
        </div>
      </div>
      </div>
    </Style>
  );
}
