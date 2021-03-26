import client from "./client"


const movieFields =`
movie,
"actor": actor->actor
`;

export const getmovies =async()=> {
    const data = await client.fetch(`*[_type == "movie"]${movieFields}`);
    return data;
} 