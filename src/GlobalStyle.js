import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, button, input {
    font-family: Sora;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    border:none;
    // background:inherit; 
    color:#fff;
    font-weight:bolder; 

}
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    // color: #fff;
    // background:#090545;
    width:30%;
    margin:0 auto;
// background: linear-gradient(90deg, rgba(64,57,166,1) 24%, rgba(66,112,158,1) 54%, rgba(67,63,140,1) 78%); 
}
ul , ol {
    padding: 0;
    margin: 0;
    list-style: none;
}
*, *:after, *:before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
.full-container {
   width: 100%;
   padding: 0 16px;

}
.container {
   width: 100%;
   padding: 0 72px;
}
.h-full {
    height: 100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between
}
.justify-center {
    justify-content: center
}
.space-around{
    justify-content:space-around;
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.row-r-direction {
    flex-direction:row-reverse;
}
.gap-5 {
    gap: 5px
}
.gap-10 {
    gap: 10px
}
.gap-15 {
    gap: 15px
}
.gap-20 {
    gap: 20px;
}
.gap-100 {
    gap:100px;
}
.gap-40 {
    gap:40px;
}
.content
{
    padding:106px 0 50px 0;
}
.btn{
    position:relative;
    padding:10px 20px;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    transition:all 1s;
    &:after,&:before{
      content:" ";
      width:10px;
      height:10px;
      position:absolute;
      border :0px solid #fff;
      transition:all 1s;
      }
    &:after{
      top:-1px;
      left:-1px;
      border-top:5px solid black;
      border-left:5px solid black;
    }
    &:before{
      bottom:-1px;
      right:-1px;
      border-bottom:5px solid black;
      border-right:5px solid black;
    }
    &:hover{
      border-top-right-radius:0px;
    border-bottom-left-radius:0px;
      &:before,&:after{
        
        width:100%;
        height:100%;
      }
    }
    }
    .hiddin {
        overflow:hidden;
    }
    op-0 {
        opcity:0;
    }
    @media 
`;
