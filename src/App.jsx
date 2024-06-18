import Header from "./componetes/Header/Header";
import Home from "./paginas/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevaPajina from "./paginas/nuevo-video";
import Footer from "./componetes/Footer/Footer";
import VideoPage from "./paginas/VIDEO.jsx";

function App() {
 

  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/nuevo-video" element={<NuevaPajina/>}/>
      <Route path="/video/:id" element={<VideoPage />} />
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App
