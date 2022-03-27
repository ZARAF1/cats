const apiKey = "a1e5d2b0-af8d-432e-8969-2b49d6621fbc"
const catAPI= {
    search(name) {
        if (name) {
            return fetch(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
                return response.json();
            }).then(jsonResponse => {

                if (jsonResponse) {
                    let breeds = jsonResponse;
                    console.log(breeds)
                    return breeds.map(breed => ({
                        id: breed.id,
                        imageSrc: `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`,
                        name: breed.name,
                        origin: breed.origin,
                        lifespan: breed.life_span,
                        adaptability: breed.adaptability,
                        description: breed.description,
                        affectionLevel: breed.affection_level,
                        energyLevel: breed.energy_level,
                        grooming: breed.grooming
                    }));
                }
            });

        } else {
            return fetch('https://api.thecatapi.com/v1/breeds', {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
                return response.json();
            }).then(jsonResponse => {

                if (jsonResponse) {
                    let breeds = jsonResponse;
                    console.log(breeds)
                    return breeds.map(breed => ({
                        id: breed.id,
                        // imageSrc: breed.image,
                        imageSrc: breed?.image?.url,
                        name: breed.name,
                        origin: breed.origin,
                        lifespan: breed.life_span,
                        adaptability: breed.adaptability,
                        description: breed.description,
                        affectionLevel: breed.affection_level,
                        energyLevel: breed.energy_level,
                        grooming: breed.grooming

                    }));
                }
            });
        }
    }
};
export default catAPI