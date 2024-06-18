import styled from "styled-components"

const Container = styled.div`
    display:flex;
    align-items: center;
    gap:5px;
    &:hover{
        cursor: pointer;
        
    }
`
const Botones = ({icon,tex ,onClick})=>{
    return(<>
    <Container onClick={onClick}>
        <img src={icon}/>
        <p>{tex}</p>
        </Container>
        </>
    )    
}
export default Botones


