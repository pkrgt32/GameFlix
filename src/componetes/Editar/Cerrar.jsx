import styled from "styled-components"
import x from "../Editar/x.png"
import xHover from "../Editar/x hover.png"
const Img = styled.img`
    cursor: pointer;
    &:hover{
        content: url(${xHover});
    }
`

const Cerrar = ({onClick})=> {
    return(
        <Img src={x} alt=""  onClick={onClick}/>
    )
}

export default Cerrar