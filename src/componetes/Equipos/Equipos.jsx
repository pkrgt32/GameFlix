import styled from "styled-components";


const ContenedorCard = styled.section`
  overflow-x: auto;
  height: 2;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  overflow-x: auto;
  
  gap: 50px;
  

  @media (min-width: 1200px) {
  width: 100%;
  height: 2;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px;
  }
`;
const TituloEquipo = styled.h1`

  font-size: 25px;
    color:#fff;
@media (min-width: 1200px) {
  
  font-size: 25px;
  color:#fff;
    
 }  
`
const ContenedoRtitulo = styled.section`
  width:300px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    position: relative;
@media  (min-width: 1200px) {
      width:400px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    position: relative;
  }
`

const Equipo = ({ equipo, color, children }) => {
  return (
    <><ContenedoRtitulo style={{ backgroundColor: `#${color}` }}>
      <TituloEquipo >{equipo}</TituloEquipo>
    </ContenedoRtitulo>
      <ContenedorCard>
        {children}
      </ContenedorCard>


    </>
  );
};

export default Equipo;
