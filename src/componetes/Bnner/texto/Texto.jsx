import styled from "styled-components"
import TituloBanner from "./ContenidoBnner/Titulo"

const ContenedorTexto = styled.section`

@media (min-width: 768px) {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 19px;
    gap: 25px;
    width: 50%;
    background-color:rgba(0 , 0, 0 ,0.5);
    padding: 5px;
}

@media (min-width:1200px) {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    gap: 25px;
    width: 50%;
    background-color:rgba(0 , 0, 0 ,0.5);
    padding: 5px;

}

`
const Imagen = styled.img`
    width: 447.79px;
    height: 333.58px;
    object-fit: cover;
@media (min-width: 1200px) {
    width: 647.79px;
    height: 333.58px;
    object-fit: cover;
}
`
const Contenedor = styled.section`
    display: flex;
    gap:50px;
    justify-content: center;
    align-items: center;
    
` 

const TextoBanner = ({data,color})=>{
    return <>
    <Contenedor>
        
        <ContenedorTexto>
       <TituloBanner equipo={data.equipo} color={color}/>
        <h1>{data.titulo}</h1>
        <p>{data.descripcion}</p>
        </ContenedorTexto>
        <Imagen style={{border:`solid #${color}`}} src={data.capa}/>
        </Contenedor>
    </>

}

export default TextoBanner