import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const VIdeo = styled.div`
width: 100%;
height: 300px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 25px 0;
 @media (min-width: 768px) {
    height: 520px;
    width: 1000px;
 }

 `
const Texto = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px ;
  @media (min-width: 768px) {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px ;
    padding:  0 25px;
    margin: 35px;
    font-size: 2em;
  }

  @media (min-width: 1200px) {
    padding:  0 250px;
  }
`
const Container = styled.div`   
    height: 100vh;
    padding: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const VideoPage = () => {
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState(''); 
  const [videoDescription, setVideoDescription] = useState(''); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://my-json-server.typicode.com/pkrgt32/api/videos/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideoUrl(data.link); 
        setVideoTitle(data.titulo); 
        setVideoDescription(data.descripcion); 
      } catch (error) {
        setError('No se pudo cargar el video');
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) {
    return <div>Cargando video...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <Container>
      <VIdeo>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VIdeo>
      <Texto>
        <h3>{videoTitle}</h3>
        <p>{videoDescription}</p>
      </Texto>
    </Container>

  </>);
};

export default VideoPage;
