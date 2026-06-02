const axios = require('axios');
const API_KEY = 'fdf1aa06f4acd57d8a35bb8ec5973c0b';

async function test() {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const movies = res.data.results.slice(0, 5);
        for (const movie of movies) {
            const vidRes = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`);
            console.log(`Movie ${movie.title}: ${vidRes.data.results.length} videos`);
        }
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
    }
}
test();
