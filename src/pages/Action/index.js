import { Fragment, useState } from "react";
import { Style } from "./Style";

export default function Action() {
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
    <Style >
      <div className="container-2" >
      <input
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        placeholder="enter the amount"
      />
      <input
        onChange={(e) => {
          setDestination(e.target.value);
        }}
        placeholder="enter destianmn account"
      />
      <button onClick={postData}>Transfer</button>
      </div>
    </Style>
  );
}
