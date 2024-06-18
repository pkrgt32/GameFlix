import React, { useRef, useState, useEffect } from 'react';
import InputText from "../formulario/inpText/InputText";
import ListaDeOpciones from "../formulario/lista de ociones/ListaDeOsiones";
import Descripcion from "../formulario/Descripcion/Descripcion";
import styled from 'styled-components';
import Boton from '../formulario/Boton/Boton';
import Cerrar from './Cerrar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color: #262626; 
`;

const Containerx= styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
`
const Editar = ({ video, onSave, onCancel }) => {
    const dialogRef = useRef(null);
    const [editedVideo, setEditedVideo] = useState({
        titulo: '',
        capa: '',
        link: '',
        descripcion: '',
        equipo: ''
    });

    useEffect(() => {
        if (video) {
            setEditedVideo(video);
            dialogRef.current.showModal();
        }
    }, [video]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedVideo((prevVideo) => ({
            ...prevVideo,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave(editedVideo);
        dialogRef.current.close();
    };

    const handleClean = () => {
        setEditedVideo({
            ...video,
            titulo: '',
            capa: '',
            link: '',
            descripcion: '',
            equipo: ''
        });
    };

    const handleClose = () => {
        dialogRef.current.close();
        onCancel();  
    };

    return (
        <dialog style={{ backgroundColor: "#262626" }} ref={dialogRef}>
            <h2 style={{ color: "#fff" }}>Editar Video</h2>
            <form onSubmit={handleSave}>
                <Container >
                   <Containerx>
                    <Cerrar onClick={handleClose}/>
                    </Containerx>
                    <InputText 
                        titulo="Título" 
                        name="titulo" 
                        value={editedVideo.titulo || ''} 
                        onChange={handleChange} 
                    />
                    <ListaDeOpciones 
                        titulo="Categoría" 
                        name="equipo" 
                        value={editedVideo.equipo || ''} 
                        onChange={handleChange} 
                    />
                    <InputText 
                        titulo="Imagen" 
                        name="capa" 
                        value={editedVideo.capa || ''} 
                        onChange={handleChange} 
                    />
                    <InputText 
                        titulo="Video" 
                        name="link" 
                        value={editedVideo.link || ''} 
                        onChange={handleChange} 
                    />
                    <Descripcion 
                        titulo="Descripción" 
                        name="descripcion" 
                        value={editedVideo.descripcion || ''} 
                        onChange={handleChange} 
                    />
                </Container>
                <Boton value="Guardar" type="submit" />
                <Boton value="Limpiar" type="button" onClick={handleClean} />
                
            </form>
        </dialog>
    );
};

export default Editar;
