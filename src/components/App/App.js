import React from "react";
import './App.css';
import CatList from "../CatList/CatList";
import SearchBar from "../SearchBar/SearchBar";
import catAPI from "../../util/Cat";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        };
        this.searchCat=this.searchCat.bind(this)
    }

    searchCat(name) {
        catAPI.search(name).then(cat => {
            this.setState({cats: cat});
        });
    }


    render() {
        console.log(this.state.cats)
        return (
            <div className="App">
                <h1>Discover Cats!</h1>
                <SearchBar searchCat={this.searchCat}/>
                <CatList cats={this.state.cats}/>
            </div>
        );
    }
}

export default App;
