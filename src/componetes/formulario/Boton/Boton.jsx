import styled from "styled-components"

const Boton = styled.input`
    width: 150px;
    height: 54px;
 color: #fff;
 background-color: #262626;
 border: 1px solid #444444;
 border-radius: 15px;
 &:hover{
    background-color: blue;
 border: 1px solid blue;
 }
 @media (min-width: 1200px) {
    width: 180.13px;
    height: 54px;
 color: #fff;
 background-color: #262626;
 border: 1px solid #444444;
 border-radius: 15px;
 &:hover{
    background-color: blue;
 border: 1px solid blue;
 }
 }
` 

const Botton = ({value,type,onClick})=>{
    return(
        <Boton type={type} value={value} onClick={onClick}/>
    )
}
export default Botton