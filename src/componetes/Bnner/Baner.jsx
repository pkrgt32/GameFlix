import styled from "styled-components"
import imgBanner from "../Bnner/Banner.png"
import TextoBanner from "./texto/Texto"


const Container = styled.section`
display: none;
@media (min-width:768px) {
    width: 100%;
    height:832px;
    position: relative;
    display: flex;
    justify-content: space-around;
}
@media (min-width:1200px) {
    width: 100%;
    height:832px;
    position: relative;
    display: flex;
    justify-content: space-around;
}
`
const ImgBanner = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;

`
const Prueba = styled.section`
    position: absolute;
    top: 25%;
    padding: 25px;
`
const Banner = ({data,color})=>{
    return(
        <>
        <Container>
        <ImgBanner src={imgBanner} alt="baner" />
        <Prueba>
        <TextoBanner data={data} color={color} />
        </Prueba>
        </Container>
        </>
    )
}


export default Banner