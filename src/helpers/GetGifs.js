export const GetGifs = async ( category ) => {
    const apiKey = 'Z3eHROIYTrrFFm579U6RBCxI0eDSMyk9';
    const limit = 10
    const search = category
    const url = `https://api.giphy.com/v1/gifs/search?q=${ search }&limit=${ limit }&api_key=${ apiKey }`

    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( ( img ) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    } )
    return gifs
}