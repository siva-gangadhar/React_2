import React from 'react'
import Styled from 'styled-components'

const Rules = () => {
  return (
    <MainContainer>
        <h1>how to play game</h1>
     <div className="text">
       <p>Select any number</p> 
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </MainContainer>
  )
}

export default Rules
const MainContainer = Styled.div `
  background-color:palegreen;
  padding:20px;
  max-width:800px;
  margin:0 auto;
  margin-top:20px;
  margin-bottom:20px;
  h1{
    font-size:24px;
  }
 .text{
    margin-top:24px;

 }


`;