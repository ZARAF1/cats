import axios from "axios";

const getAllCats=()=>{
    axios.get('https://api.thecatapi.com/v1/breeds', { headers: { 'x-api-key': 'a1e5d2b0-af8d-432e-8969-2b49d6621fbc' } })
        .then(response => {
            // If request is good...
            console.log(response.data);
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export default getAllCats;


