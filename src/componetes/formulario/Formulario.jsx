import React, { useState } from "react";
import styled from "styled-components";
import InputText from "./inpText/InputText";
import ListaDeOpciones from "./lista de ociones/ListaDeOsiones";
import Descripcion from "./Descripcion/Descripcion";
import Botton from "./Boton/Boton";

const Titulo = styled.h1`
    margin: 15px; 
    color: #FFF;
   
    @media (min-width: 768px) {
      color: #FFF;
    font-size: 35px;
    margin: 25px;
    }
`;
const DivSeparador = styled.div`
    width: 300px;
    height: 1px;
    background-color: #423b1a;
    @media (min-width: 768px) {
        background-color: #49443b;
        width: 100%;
        height: 2px; 
    }
`


const Pading = styled.form`
    width: 100%;
    height: 100%;
    overflow: none; 
    
    @media (min-width: 768px) {
        padding: 0 25px;
    }
`;
const Contenedorinput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Containber = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
    }
`;
const PocicinBOtoton = styled.div`
    display: flex;
  gap:10px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 25%;
    display: flex;
    justify-content: space-around;
    margin: 30px 200px;
  }
`
const Formulario = () => {
    const [formData, setFormData] = useState({
        titulo: "",
        capa: "",
        descripcion: "",
        link: "",
        equipo: "Nuevos JUEGOS"
    });
    const [formulario, setFormulario] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'id' && !isNaN(value) ? parseInt(value, 10) : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: parsedValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://my-json-server.typicode.com/pkrgt32/api/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Formulario enviado con éxito');
                setFormData({
                    titulo: "",
                    capa: "",
                    descripcion: "",
                    link: "",
                    equipo: ""
                });
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <>
            <Pading onSubmit={handleSubmit}>
                <DivSeparador />
                <Titulo>Crear Tarjeta</Titulo>
                <DivSeparador />
                <Containber>
                    <Contenedorinput>
                        <InputText
                            titulo="Título"
                            placeholder="ingrese el título"
                            value={formData.titulo}
                            onChange={handleChange}
                            name="titulo"
                        />
                        <InputText
                            titulo="Imagen"
                            placeholder="el enlace es obligatorio"
                            value={formData.capa}
                            onChange={handleChange}
                            name="capa"
                        />
                        <Descripcion
                            titulo="Descripción"
                            placeholder="¿De qué se trata este vídeo?"
                            value={formData.descripcion}
                            onChange={handleChange}
                            name="descripcion"
                            formulario={formulario}
                        />
                    </Contenedorinput>
                    <Contenedorinput>
                        <InputText
                            titulo="Video"
                            placeholder="ingrese el enlace del video"
                            value={formData.link}
                            onChange={handleChange}
                            name="link"
                        />
                        <ListaDeOpciones
                            titulo="Categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            name="equipo"
                        />
                    </Contenedorinput>
                </Containber>
                <PocicinBOtoton>
                    <Botton value="enviar" type="submit" />
                    <Botton
                        value="limpiar"
                        type="button"
                        onClick={() => {
                            setFormData({
                                titulo: "",
                                capa: "",
                                descripcion: "",
                                link: "",
                                equipo: ""
                            });
                        }}
                    /></PocicinBOtoton>
            </Pading>
        </>
    );
};

export default Formulario;
