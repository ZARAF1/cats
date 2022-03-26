import React from "react";
import './App.css';
import CatList from "../CatList/CatList";
import SearchBar from "../SearchBar/SearchBar";

const cat = {
    imageSrc: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    name: 'Abyssinian',
    origin: 'Egypt',
    lifespan: '14-15 years',
    adaptability: 5,
    description: 'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    affectionLevel: 4,
    energyLevel: 5,
    grooming: 1
}

const cats=[cat,cat,cat,cat,cat,cat]

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <h1>Discover Cats!</h1>
          <SearchBar/>
          <CatList cats={cats}/>
        </div>
    );
  }
}
export default App;
