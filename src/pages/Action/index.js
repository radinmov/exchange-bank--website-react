import { Fragment, useState } from "react";

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
        "Authorization": "JWT " + localStorage.getItem("Access"),
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));

    // fetch("https://cacore.liara.run/bank/asset", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "JWT " + localStorage.getItem("Access"),
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <Fragment>
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
        placeholder="enter destianmn account "
      />
      <button onClick={postData}>post</button>
    </Fragment>
  );
}
