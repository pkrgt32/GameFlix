import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../Header/Logo.png"
import Funciones from "./LitaFunsiones"


const Fondo = styled.header`
    position: fixed;
    background-color: #000;
    width: 100%;
    height: 75px;
    border-top:solid blue ;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    color: #fff;
   

@media (min-width: 768px) {
    position: relative;
     background-color: #000;
    width: 100%;
    
    border-top:solid blue ;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    color: #fff;
    padding: 50px 0;
}
`
const StileLink = styled(Link)`
    color: #ffff;
    text-decoration: none;
@media (min-width: 768px) {
    display: none;
    
}
`

const Logo = styled.img`
    display: none;
   @media (min-width: 768px) {
    width: 25%;
    display: block;
   }

`

const Footer = () =>{
    return(
        <>
        <Fondo>
        <Logo src={logo} alt="aluraflix" />
            <StileLink to="/">
            <Funciones home nombre="HOME"/>
            </StileLink >
            <StileLink to="/nuevo-video">
            <Funciones nuevo/>
            </StileLink>
        </Fondo>
        </>
    )
}

export default Footer