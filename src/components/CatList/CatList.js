import React from "react";
import "./CatList.css"
import Cat from "../Cat/Cat";
/* eslint-disable react/prop-types */


/*
Purpose: The purpose of <CatList /> component is to simulate what a returned list of cats would look like
(after querying the cat API, for example). To help this simulation, <CatList /> will make use of the <Cat /> component
repeatedly. To use the <Cat /> component, I will have to import it.
*/

class CatList extends React.Component{

    render(){
        return (
            <ol className="cat-list">
               {this.props.cats.map(cat=>{
                    return  <li key={cat.id}><Cat cat={cat} /></li>
                })}

            </ol>
        )
    }
}

export default CatList;