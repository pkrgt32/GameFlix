import styled from "styled-components"

const Container = styled.section`
    width:296.82px;
    height: 92px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`
const H1Stilisado = styled.h1`
    

`

const TituloBanner = ({equipo,color}) => {
    return <>
        <Container style={{backgroundColor:`#${color}`}}>
            <H1Stilisado >{equipo}</H1Stilisado>
        </Container>
    </>
}
export default TituloBanner