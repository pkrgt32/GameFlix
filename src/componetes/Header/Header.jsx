import styled from "styled-components"
import Lista from "./Lista/lista"
import logo from "../Header/Logo.png"

const Fondo = styled.header`
display: none;

@media (min-width:768px) {
    background-color: #000;
    width: 100%;
    height: 125px;
    border-bottom:solid blue ;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
}
`
const Logo = styled.img`
    width: 25%;
`

const Header = () =>{
    return(
        <>
        <Fondo>
        <Logo src={logo} alt="aluraflix" />
         <Lista/>
        </Fondo>
        </>
    )
}

export default Header