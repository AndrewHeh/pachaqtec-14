const URL = "https://api.unsplash.com/search/photos?page=1&query=category&client_id=49nk5VjP-1B_jp7idVGtm28pt224UW47nVAVH-MCZ5Q";

async function getPhotos() {
    try{
        const response = await fetch(URL);
        const { results } = await response.json();

        console.log(results);

    }catch (error) {
        console.error(error);
    }
};

getPhotos();