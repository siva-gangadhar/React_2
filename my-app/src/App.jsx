
import {useState} from 'react';
import Startgame from './components/Startgame.jsx';
import Gameplay from './components/Gameplay.jsx';

const App = () => {
  const[isGamestarted, setIsGamestarted]= useState(false);

  const togglegameplay = () => {
    setIsGamestarted((prev) => !prev);
  };
  


  return (
    <>
    {isGamestarted ? <Gameplay />:<Startgame toggle={togglegameplay} />}
    </>
    
  );
}

export default App