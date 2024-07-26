import styled from "styled-components"

import React from 'react'

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div> <img src="./images/dices 1.png" alt="dice image" />
        </div>
      
       <div className ="content">
        <h1>DICE-GAME</h1>
        <Button
        onClick={toggle}>PlayNow</Button>
       </div>

    </Container>
  )
}

export default Startgame;
const Container = styled.div`
  max-width:1180px;
  height:100vh;
  display:flex;
  margin:0 auto;
  align-items:center;
  .content{
    h1{
       font-size:96px; 
       white-space: nowrap;
    }
  }

`;
const Button = styled.button`
 background-color: black;
 color:white;
 padding:10px 18px;
 border-radius:5px;
 min-width:220px;
 border:none;
 font-size: 16px;
 border:1px solid back;
 transition:0.4s background ease-in;
 cursor:pointer;

 &:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
 }

`;