import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './hogar.png';
import HomeActive from './hogar-Activado.png';
import archivoNuevo from './archivo-nuevo.png';
import archivoNuevoActive from './archivo-nuevo-Activado.png';

const Img = styled.img`
display: flex;
align-items: center;
`
const Contenedor=styled.div`
 display: flex;
 align-content: center;
 align-items: end;
 gap: 10px;

`


const Funciones = ({ home, nuevo, nombre }) => {
  const [hover, setHover] = useState(false);

  let src;

  if (home) {
    src = hover ? HomeActive : Home;
  } else if (nuevo) {
    src = hover ? archivoNuevoActive : archivoNuevo;
  } else {
    src = ''; 
  }

  return (
    <Contenedor>
      <Img 
        src={src} 
        alt={nombre} 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
      />
      <h2>{nombre}</h2>
    </Contenedor>
  );
};

export default Funciones;

