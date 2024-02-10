import { useState, useEffect, Fragment } from "react";
import { Style } from "./Style";
import Header_2 from "../../componets/Header_2";
import useTitle from "../../componets/Hook/useTitle";
import Info from "../../componets/person_info";

export default function Homepage() {
  const title = useTitle("Home");
  const [amout, setAmount] = useState();
  const [account, setAccount] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [transaction, setTransaction] = useState([]);

  const getTransations = () => {
    fetch("https://cacore.liara.run/bank/transactions/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTransaction(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransations();
  }, []);

  useEffect(() => {
    fetch("https://cacore.liara.run/bank/asset", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setAccount(result.account);
        setAmount(result.amount);
        setId(result.id)
      })
      .catch((err) => console.log(err));

    fetch("https://cacore.liara.run/bank/transactions/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + localStorage.getItem("Access"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Style>
      <Header_2 />

      <div className="container_start black">
        <Info />
        <div className="container-start__inner w-full">
          <div className="fh-card flex justify-center gap-100">
            <div className="card">
              <div className="card_inner">
                <img className="test-2" src="assets/images/home/maste3r.png" />
                <p className="nm">{name}</p>
                <p className="text-white text-xl ">{amout}$</p>
                <h1 className="flex mt-8 txt_2 justify-center text-xl text-white">{account}</h1>
              </div>
            </div>
          </div>
          <div className="bg " style={{ marginTop: "50px" }}>
            <div className="fh flex  justify-center gap-40 ">
              <p className="amn">Amount</p>
              <p>Destination</p>
            </div>
            {transaction.length > 0 &&
              transaction.map((item) => {
                const operationColor =
                  item.operation === "send" ? "red" : "green";

                return (
                  <Style>
                    <div className="fh_details flex justify-center gap-10 mg">
                      <div>{item.amount}$</div>
                      <div>{item.destination_account}</div>
                      <p style={{ color: operationColor }}>{item.operation}</p>
                    </div>
                  </Style>
                );
              })}
          </div>
        </div>
      </div>
    </Style>
  );
}
