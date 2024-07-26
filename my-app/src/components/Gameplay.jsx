import React,{useState} from 'react'
import Score from './Score'
import Selector from './Selector'
import Styled from 'styled-components'
import Rolldice from './Rolldice'
import Rules from './Rules'

const Gameplay = () => {
  const[score,setscore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentdice,setCurrentDice] = useState(1);
  const[error,setError] = useState()
  const[rules,setrules] =useState(true);

  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min)+min);
};
const rolldice = () =>{
  if(!selectedNumber){
    setError("you are not selected any number yet!")
   return;
  }
  setError("");
  const randomNumber = generateRandomNumber(1,7);
  setCurrentDice((prev) => randomNumber);
  
  if(selectedNumber === randomNumber ){
    setscore((prev) =>prev+randomNumber);
  }else{
    setscore((prev) => prev -2);
  }
  setSelectedNumber(undefined);

}; 
  const resetScore = () =>{
    setscore(0);
  }
  return (
   <Main>
    <div className ="top_section">
     <Score 
     score = {score}
     />
  <Selector 
     error={error}
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
    </div>
    <Rolldice
    currentdice={currentdice}
    rolldice ={rolldice} 
    />
    <div className="btns">
      <button
      onClick={resetScore}
      >Reset Button</button>
      
    </div>
     {setrules && <Rules />}

   </Main>
  )
}

export default Gameplay
const Main = Styled.div`
 padding-top:70px;
 .top_section{
  display:flex;
  justify-content:space-between;
  align-items:end;
 }
.btns{
  display:flex;
  gap:10px;
  flex-direction:column;
  justify-content:center;
  gap:10px;
  width:200px;
  margin:0 auto;
  cursor:pointer;
  transition:0.3s;
  

}
`;