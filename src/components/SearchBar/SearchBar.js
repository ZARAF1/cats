import React from "react";
import "./SearchBar.css"

/*
The search bar will communicate with the Cat API, but I will build the functionality to communicate with the API later.
Today, I will build part of the structure that’s needed to communicate with the cat API. Specifically,
requests to the cat API must follow formatting and naming conventions set by the API. For example, the search bar should
 allow users to search cats by:
 name
*/

class SearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {term:""};
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this)
    }
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }
    handleSearch(event) {
        this.props.searchCat(this.state.term);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                    <div className="SearchBar-fields">
                    <input placeholder="Enter Cat Name" onChange={this.handleTermChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Search</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;