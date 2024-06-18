import React, { useState, useEffect } from "react";
import Banner from "../componetes/Bnner/Baner";
import Card from "../componetes/Card/Card";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const renderVideosPorEquipo = (equipo) => {
    if (!data) return null;

    const videosPorEquipo = data.filter((video) => video.equipo === equipo);

    return (
      <div key={equipo}>
        <h2>{equipo}</h2>
        {videosPorEquipo.map((video) => (
          <Card key={video.id} img={video.capa} titulo={video.titulo} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && (
        <>
         
          {renderVideosPorEquipo("Nuebo JUEGOS")}
          {renderVideosPorEquipo("juegos de disparos")}
          {/* Agrega más llamadas a renderVideosPorEquipo para otros equipos */}
        </>
      )}
    </div>
  );
};

export default Home;
