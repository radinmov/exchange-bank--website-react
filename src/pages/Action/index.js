import { useState } from "react";
import { Style } from "./Style";
import useTitle from "../../componets/Hook/useTitle";
import Header from "../../componets/Header";
import Info from "../../componets/person_info";

export default function Action() {
  const title = useTitle("Transaction");
  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState("");

  function postData() {
    if (!amount.trim() || !destination.trim()) {
      alert("Please fill all inputs Thanks!");
      return;
    }

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
      <Info />
      <div className="container_fh">
        <div className="container-2">
          <div className="container_inner">
            <p className="txt">Transaction page </p>'
            <div className="int_1" >
            {/* <p style={{color:"black" , textAlign:"left"}}>Enter you amount</p> */}
            <input
              className="clas"
              inputmode="numeric"
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter the amount"
            />
            </div>
            <div className="int_2" >
            <input
              className="clas"
              type="text"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter Destination account"
            />
            </div>
            <button className="btn_ac " onClick={postData}>
              <img src="assets/public_icons/send.png" />
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}
