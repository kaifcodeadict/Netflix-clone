const API_KEY = "e4b566097e9f94f717594fc52608fa17";
const requst = {
    popularMovies:`/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
    highestRatedmovies:`/discover/movie/?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
    kidsMovies:`/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
    bestFrom2021:`/discover/movie?api_key=${API_KEY}&primary_release_year=2010&sort_by=vote_average.desc`,
    relaseFrom2020:`/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2014`,
    romanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    domcumentariesMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    horrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    comedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    actionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    netflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
}

export default requst