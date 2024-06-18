import styled from "styled-components"

const Textarea = styled.textarea`

    width: 300px;
    height: ${(props) => (props.formulario ? '220px' : '100px')};
    background-color: #262626;
    border: 1px solid #444444;
    border-radius: 10px;
    color: #FFF;
    &:focus{
        color: #FFF;
    }
  @media (min-width: 1200px) {
    
  
    width: 449.88px;
    height: ${(props) => (props.formulario ? '220px' : '100px')};
    background-color: #262626;
    border: 1px solid #444444;
    border-radius: 10px;
    color: #FFF;
    &:focus{
        color: #FFF;
    }
  }

`
const Ladel = styled.label`
    color: #fff;
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    margin: 15px;
`
const Descripcion = ({ titulo, placeholder, value, onChange, name , formulario }) => (
    <Contenedor>
      <Ladel>{titulo}</Ladel>
      <Textarea 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        name={name}
        required
        formulario={formulario}
      ></Textarea>
    </Contenedor>
  );
  
  export default Descripcion;
  