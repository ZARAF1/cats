const apiKey = "a1e5d2b0-af8d-432e-8969-2b49d6621fbc"
const CatAPI= {
    search(name){
        return fetch('https://api.thecatapi.com/v1/breeds/search',{headers:{Authorization:`Bearer ${apiKey}`}}).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.breeds) {
                return jsonResponse.breeds.map(breed => ({
                    id:breed.id,
                    imageSrc: breed.image.url,
                    name: breed.name,
                    origin: breed.origin,
                    lifespan: breed.lifespan,
                    adaptability: breed.adaptability,
                    description: breed.description,
                    affectionLevel: breed.affectionLevel,
                    energyLevel:breed.energyLevel,
                    grooming: breed.grooming
                }));
            }
        });
    }
};
export default <CatAPI></CatAPI>