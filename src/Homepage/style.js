import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: white;

  .fh_card {
    width: 400px;
    height: 200px;
    border-radius: 10px;
    background: rgb(64, 57, 166);
    background: linear-gradient(
      90deg,
      rgba(64, 57, 166, 1) 24%,
      rgba(66, 112, 158, 1) 54%,
      rgba(67, 63, 140, 1) 78%
    );

    .card {
      .card_inner {
        margin:10px;
        h1 {
          font-size: x-large;
          text-transform: uppercase;
        }
      }
    }
  }
`;
