import styled from "styled-components";

export const Style = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  background-image: url("https://www.indiafilings.com/learn/wp-content/uploads/2020/09/shutterstock_1529380166.jpg");
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
  .int_1 , int_2 {
    width: 90%;
  }
  input.clas {
    // border:1px solid #000;
    
    color: #000;
    outline: 0;
  }
  .txt {
    color: #000;
  }
`;
