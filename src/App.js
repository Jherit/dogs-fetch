import React, {useState, useEffect} from 'react'
import './App.css';
import DogFrame from './components/DogFrame'

function App() { 
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    FetchDogHandler();
  }, []);

  useEffect(() => {
    document.title = "Create Dog React App"
 }, []);

 function FetchDogHandler() {
    setIsLoading(true);
    fetch('https://dog.ceo/api/breeds/image/random').then(response => {
      return response.json();
    }).then(data => {
      setDogs(data.message);
      setIsLoading(false);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Random Dog - React App</h1>
        {!isLoading && <DogFrame dogs={dogs} />}
        {isLoading && <p>Releasing the hounds...</p>}
        <button className="AppDogButton" onClick={FetchDogHandler}>🐕 Tap for a new dog 🐕</button>
      </header>
    </div>
  );
}

export default App;
