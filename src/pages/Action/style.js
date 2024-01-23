import styled from "styled-components";

export const Style = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  background-image: url("https://img.freepik.com/premium-vector/banking-service-background-bank-building-icon-made-with-currency-symbols-dollar-euro-yen-pound-icons_127544-803.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais");
  .container_fh {
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-2 {
    width: 300px;
    height: 280px;
    background: white;
    text-align: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button.btn_ac {
    background: blue;
    border: none;
    width: 90%;
    height: 30px;
    margin-top: 40px;
    border-radius: 5px;
  }
  .btn_ac:hover {
    background: red;
  }
  input {
    width: 90%;
    margin-top: 50px;
    color: #000;
    outline: 0;
  }
  .txt {
    color: #000;
  }
`;
