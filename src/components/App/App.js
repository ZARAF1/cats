import React from "react";
import './App.css';
import CatList from "../CatList/CatList";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component{
  render() {
    return (
        <div className="App">
          <h1>Dicover Cats!</h1>
          <SearchBar/>
          <CatList/>
        </div>
    );
  }
}
export default App;
