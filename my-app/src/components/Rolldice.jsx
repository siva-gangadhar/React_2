
import Styled from "styled-components";
const Rolldice = ({rolldice,currentdice}) => {
    
    
  return (
    <Dice>
        <div className="dice"
        onClick={rolldice}>
            <img src ={`/images/dice_${currentdice}.png`}   alt="diceimg" />
        </div>
        <p>Click on Dice to roll</p>
    </Dice>
  )
}

export default Rolldice
const Dice = Styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
p{
    font-size:24px;

}
  .dice{
    cursor:pointer;
  }
`;