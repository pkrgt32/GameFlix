import styled from "styled-components"

const Estilos = styled.section`
    color:#fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width:100%;
    height: 250px;
    padding: 50px 0;
`

const H1 = styled.h1`
font-size: 90px;
`
const H3 = styled.h3`
    font-size: 30px;
`
const TituloNuevaPajina = () => {
    return <>
        <Estilos>
            <H1>Nuevo video</H1>
            <H3>Complete el formulario para crear una nueva tarjeta de video</H3>
        </Estilos>
    </>
}

export default TituloNuevaPajina