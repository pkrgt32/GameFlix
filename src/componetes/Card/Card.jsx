import styled from 'styled-components';
import Botones from './botones/Botones';
import Eliminar from './eliminar.png';
import Editar from './editar.png';
import { useNavigate } from 'react-router-dom';

const Imagen = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;

  &:hover {
    cursor: pointer;
  }
`;

const ComtenedorCrd = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  width: 430px;
  height: auto; 
  object-fit: cover;
`;

const Footer = styled.footer`
 width:auto;
  height: 50px;
  background-color: black;
  border-radius: 0 0 25px 25px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 60px;

@media (min-width: 1200px) {
  width: 100%;
  height: 50px;
  background-color: black;
  border-radius: 0 0 25px 25px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 60px;
}
  
`

const Card = ({ id, img, color, onDelete ,onEdit}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id); 
  };

  const handleImageClick = () => {
    navigate(`/video/${id}`); 
  };

  return (
    <ComtenedorCrd style={{ border: `solid #${color}` }}>
      <Imagen src={img} onClick={handleImageClick} />
      <Footer>
        <Botones icon={Eliminar} tex="borrar" onClick={handleDelete} />
        <Botones icon={Editar} tex="editar" onClick={onEdit} />
      </Footer>
    </ComtenedorCrd>
  );
};

export default Card;
