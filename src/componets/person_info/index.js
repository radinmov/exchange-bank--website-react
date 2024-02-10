import { Style } from "./Style";
import { useEffect , useState } from "react";

export default function Info() {
    const [amout, setAmount] = useState();
    const [account, setAccount] = useState();
    const [id, setId] = useState();
    useEffect(() => {
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
                    <div className="person_info w-72 h-20 m-8 relative rounded  bg-emerald-700 ">
          <div className="person_info_inner flex items-center">
            <div className="avater ">
              <div className="avatar_info">
                <img src="assets/public_icons/avatar.png" />
              </div>
            </div>
            <div className="info_txt" >
              <p className="text-white alk m-2 ">{account}</p>
              <p>Amount:{amout}$</p>
            </div>
          </div>
        </div>
        </Style>
    )
}