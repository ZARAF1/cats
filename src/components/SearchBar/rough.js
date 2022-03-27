import React from "react";
import "./SearchBar.css"

/*
The search bar will communicate with the Cat API, but I will build the functionality to communicate with the API later.
Today, I will build part of the structure that’s needed to communicate with the cat API. Specifically,
requests to the cat API must follow formatting and naming conventions set by the API. For example, the search bar should
 allow users to search cats by:
 breeds
 categories
 filetype i.e, gif / jpp / png
*/
/*
To achieve this, i will create an object with keys and values that conform to what the API expects to receive .
*/
/*const sortByOptions = {
    Breeds: 'name',
    Categories: 'name',
    Types: 'mime_types'
}*/

class SearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
 The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options
 (breeds, categories, mime-types). This is to help future proof against potential changes to the API.

 The method will iterate through the keys and values of the sortByOptions object and return a list item.
 The list item elements will use the keys as an attribute, and the values as its content.
  */

    /*
    renderSortByOptions() {
          return Object.keys(sortByOptions).map(sortByOption => {
              let sortByOptionValue = sortByOptions[sortByOption];
              return <li key={sortByOptionValue}>{sortByOption}</li>
          });
      }
      */

    render() {
        return (
            <div className="SearchBar">
                {/* <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>*/}
                <div className="SearchBar-fields">
                    <input placeholder="Search"/>
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;