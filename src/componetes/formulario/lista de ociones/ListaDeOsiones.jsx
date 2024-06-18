// lista de opciones/ListaDeOpciones.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  width: 300px;
  height: 35px;
  background-color: #262626;
  color: #ffffff;
  border: 1px solid #444444;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  -webkit-appearance: none;  
  -moz-appearance: none;    
  appearance: none;         
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
  border-radius: 10px;
  

  option {
    background-color: #262626;
    color: #ffffff;
  }
@media (min-width: 1200px) {
  

  width: 450px;
  height: 35px;
  background-color: #262626;
  color: #ffffff;
  border: 1px solid #444444;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  -webkit-appearance: none;  
  -moz-appearance: none;    
  appearance: none;         
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
  border-radius: 10px;
  

  option {
    background-color: #262626;
    color: #ffffff;
  }}
`;

const Label = styled.label`
  color: #fff;
`;
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;`
    
 
    const ListaDeOpciones = ({ titulo, value, onChange, name }) => {
      const [options, setOptions] = useState([]);
    
      useEffect(() => {
        const fetchOptions = async () => {
          try {
            const response = await fetch('https://my-json-server.typicode.com/pkrgt32/api/Lista');
            const data = await response.json();
            setOptions(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchOptions();
      }, []);
    
      return (
        <Contenedor>
          <Label>{titulo}</Label>
          <Select value={value} onChange={onChange} name={name} required>
            <option value=""hidden >Seleccionar la Categoria</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.equipo}
              </option>
            ))}
          </Select>
        </Contenedor>
      );
    };
    
    export default ListaDeOpciones
    
    
    








