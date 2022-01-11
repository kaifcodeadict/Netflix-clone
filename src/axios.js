import axios from 'axios';

// base url to make requsts to the movies database

const  instance = axios.create({

    baseURL:"https://api.themoviedb.org/3"

})


export default instance; 