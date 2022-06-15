import './App.css';
import { useState, useEffect } from 'react'
import Gallery from './gallery/gallery';
import Btns from './gallery/btns'
import Form from'./gallery/form'



function App() {
  const [artId, setArtId] = useState(12720)
  const [data, setData] = useState({})
  
  
  useEffect(() => {
    document.title = 'Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
}

  return (
    <>
      <h1>Art Gallery</h1>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <Btns handleIterate={handleIterate}/>
    </>
  );
}

export default App;
