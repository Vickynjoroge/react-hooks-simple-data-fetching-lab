// create your App component here
import React, { useState, useEffect } from 'react'

function App() {
    const [dogImageUrl, setDogImageUrl] = useState('')
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data)=>{
            setDogImageUrl(data.message);
        })
        .catch((error) => {
            console.error('Error fetching dog image:', error);
        });
    }, []);

  return (
    <div>
        {dogImageUrl ? (
            <img src = {dogImageUrl} alt='A Random Dog' />
        ) : (
            <p>Loading...</p>
        )}
    </div>
  )
}

export default App;