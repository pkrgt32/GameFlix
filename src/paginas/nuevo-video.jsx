import styled from "styled-components"
import TituloNuevaPajina from "../componetes/TituloNPajina/TituloNuevaPajina"
import Formulario from "../componetes/formulario/Formulario"

const Fondo = styled.div`
    width: 100%;
    margin: 0 0 105px 0;
    display: flex;
    flex-direction: column; 
 @media (min-width:7){
   background-color: #262626; 
}
@media (min-width:1200px){
   background-color: #262626; 
}
`



const NuevaPajina = ()=>{
    return <>
    <Fondo>
        <TituloNuevaPajina/>
        <Formulario/>
    </Fondo>
    
    
    </>
}

export default NuevaPajina