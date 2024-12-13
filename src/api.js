import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID k8ljl7bhBeUyfNP9-UhTO4r3Br5zzXXpE3QJOBdKBbQ',
        },
        params: {
            query: term, //query: Arama terimi olarak gönderilen parametre. Örneğin, "cat" gibi bir değer bu parametreye atanır.
        },
    });
    debugger;
    return response.data.results; // API’nin döndürdüğü görsel sonuçlar. Bu, bir dizi (array) olarak döner.
};

export default searchImages;