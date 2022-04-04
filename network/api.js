export const searchImagesByText = (txt, pageNumber) => {
    return fetch(
        'https://pixabay.com/api?' + new URLSearchParams({
            key: '26422392-94da3a7c1e8bee0fdd0f223dc',
            q: txt || '',
            page: pageNumber || 1,
            image_type: 'photo',
            safesearch: true
        })
    ).catch((error) => {
        throw error;
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }else{
            throw response;
        }
    }).then((response) => {
        if(response && response.hits){
            return Promise.resolve(response.hits);
        }else{
            throw response;  
        }
    });
}