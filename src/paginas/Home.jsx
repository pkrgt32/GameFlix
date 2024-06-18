import Banner from "../componetes/Bnner/Baner";
import { useState, useEffect } from "react";
import Equipo from "../componetes/Equipos/Equipos";
import Card from "../componetes/Card/Card";
import styled from "styled-components";
import Editar from "../componetes/Editar/Editar";

const Fondo = styled.div`
    background-color: #262626;
    position:relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 25px 0 65px 0;
    overflow: auto;
    @media (min-width: 768px) {
        margin: 0;
        gap: 25px;
    }
  
`;

const Contenedor = styled.div`
   padding: 25px;
   overflow: none;

`

const Home = () => {
    const [data, setData] = useState([]);
    const [randomNumber, setRandomNumber] = useState(null);
    const [error, setError] = useState(null);
    const [equipo, setEquipo] = useState([]);
    const [videoToEdit, setVideoToEdit] = useState(null);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/pkrgt32/api/videos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos de la API");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setRandomNumber(generateRandomNumber(data.length));
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/pkrgt32/api/Lista")
            .then((response) => response.json())
            .then((equipos) => setEquipo(equipos));
    }, []);

    const handleDelete = (id) => {
        if (id === "1") {
            console.log("No se puede eliminar el elemento con id igual a 1");
            return;
        }

        fetch(`https://my-json-server.typicode.com/pkrgt32/api/videos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar el elemento');
            }
            setData(data.filter(item => item.id !== id));
        })
        .catch(error => {
            console.error('Error al eliminar el elemento:', error);
        });
    };

    const handleEdit = (video) => {
        setVideoToEdit(video);
    };

    const handleSave = (editedVideo) => {
        fetch(`https://my-json-server.typicode.com/pkrgt32/api/videos/${editedVideo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedVideo),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el video');
            }
            setData(data.map(item => item.id === editedVideo.id ? editedVideo : item));
        })
        .catch(error => {
            console.error('Error al actualizar el video:', error);
        });
        setVideoToEdit(null);
    };

    const handleCancel = () => {
        setVideoToEdit(null);
    };

    const generateRandomNumber = (listLength) => {
        return Math.floor(Math.random() * listLength);
    };

    const filterByEquipo = (equipo) => {
        return data.filter((item) => item.equipo === equipo);
    };

    const filterEquiposWithCards = (equipos) => {
        return equipos.filter((e) => filterByEquipo(e.equipo).length > 0);
    };

    const getColorByEquipo = (equipo) => {
        const foundEquipo = equipo.find((e) => e.equipo === data[randomNumber]?.equipo);
        return foundEquipo ? foundEquipo.colorPrimario : "#e60ffa";
    };

    return (
        <>
            <Fondo>
                {error && <p>Error: {error}</p>}
                {data && randomNumber !== null && (
                    <Banner data={data[randomNumber]} color={getColorByEquipo(equipo)} key={data[randomNumber].id} />
                )}
                {data.length === 0 && <p>No hay videos disponibles. ¡Crea uno nuevo!</p>}
                <Contenedor>
                {equipo &&
                    filterEquiposWithCards(equipo).map((e) => (
                        <Equipo equipo={e.equipo} color={e.colorPrimario} key={e.id}>
                            {filterByEquipo(e.equipo).map((user) => (
                                <Card 
                                    id={user.id} 
                                    key={user.id} 
                                    img={user.capa} 
                                    color={e.colorPrimario} 
                                    onDelete={() => handleDelete(user.id)} 
                                    onEdit={() => handleEdit(user)} 
                                />
                            ))}
                        </Equipo>
                    ))}
                    </Contenedor>

                <Editar video={videoToEdit} onSave={handleSave} onCancel={handleCancel} />
            </Fondo>
        </>
    );
};

export default Home;
