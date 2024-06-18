import styled from "styled-components"

const Ladel = styled.label`
    color: #fff;
`
const Input = styled.input`
    width: 300px;
    height: 30px;
    background-color: #262626;
    border: 1px solid #444444;
    border-radius: 10px;
    color: #FFF;
    &::after{
        color: #FFF;
    }
  @media (min-width: 1200px) {
    width: 449.88px;
    height: 30px;
    background-color: #262626;
    border: 1px solid #444444;
    border-radius: 10px;
    color: #FFF;
    &::after{
        color: #FFF;
    }
    }
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    margin: 15px;
`

const InputText = ({ titulo, placeholder, value, onChange, name}) => (
    <Contenedor>
      <Ladel>{titulo}</Ladel>
      <Input 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        name={name} 
        required
      />
    </Contenedor>
  );
  
  export default InputText;
  
  
