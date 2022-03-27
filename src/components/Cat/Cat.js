import React from "react";
import "./Cat.css"


/*
Purpose: The purpose of the Cat component is to represent how a cat card will be formatted and styled. For now, we’ll hard
code a single Cat listing. Later, I will update it dynamically using the cat API.
*/

// The information in the Cat object will be consumed by the <Cat /> component


class Cat extends React.Component{
    render() {
        console.log(this.props.cat)
        return (
            <div className="cat">
                <div className="image-container">
                    <img src={this.props.cat.imageSrc} alt={this.props.cat.name}/>
                </div>
                <h2>{this.props.cat.name}</h2>
                <div className="cat-information">
                    <div className="cat-origin">
                        <p><span className="bold">Origin:</span> {this.props.cat.origin}</p>
                        <p><span className="bold">Life Span:</span> {this.props.cat.lifespan}</p>
                        <p><span className="bold">Description:</span> <br/>{this.props.cat.description}</p>
                    </div>
                    <div className="cat-reviews">
                        <h3 className="adaptability"><span className="bold">Adaptability: </span>{this.props.cat.adaptability}/5</h3>
                        <h3><span className="bold">Affection:</span> {this.props.cat.affectionLevel}/5</h3>
                        <p><span className="bold">Energy:</span> {this.props.cat.energyLevel}/5</p>
                        <p><span className="bold">Grooming: </span>{this.props.cat.grooming}/5</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cat;


// constructor(props) {
//     super(props);
//     this.state={
//         data:[]
//     }
// }

/*
        axios.get('https://api.thecatapi.com/v1/breeds', { headers: { 'x-api-key': 'a1e5d2b0-af8d-432e-8969-2b49d6621fbc' } })
            .then(response => {
                // If request is good...
                // console.log(response.data);
                this.setState({ data: response.data })
            })
            .catch((error) => {
                console.log('error ' + error);
            });
        */
