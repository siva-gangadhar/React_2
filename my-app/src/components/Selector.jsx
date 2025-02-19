
import Styled from 'styled-components'

const Selector = ({error,selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];
    

  return (
    <Container>
        <p className = "error">{error}</p>
        <div className="flex">
            {arrNumber.map((value,i) =>(
            <Box
            isSelected={
                value===selectedNumber
            }
            key={i} onClick={()=>
                setSelectedNumber(value)
            }>{value}</Box>
            ))}
        </div>
        <p>Select Number</p>
    </Container>
      
  )
}

export default Selector
const Container = Styled.div`
 display:flex;
 flex-direction:column;
 align-items:end;
 .flex{
    display:flex;
    gap:5px;
 }
 p{
    font-size:24px;
    font-weight:700px;
 }
 .error{
    color:red;
 }


`;
const Box = Styled.div`
 height:72px;
 width:72px;
 border:1px solid black;
 display:grid;
 place-items:center;
 font-size:24px;
 font-weight:700;
 background-color:${(props) => (props.isSelected? "black" :"white")};
 color:${(props) => (props.isSelected? "white" :"black")};
 cursor:pointer;

`;