import {reactive} from 'vue';

export const store = reactive ({

    // LANGUAGE AND FLAGS SETTINGS

    flagAddress: "https://flagcdn.com/48x36/",

    imageAddress: "https://image.tmdb.org/t/p/w342",

    languages: "",


    // MOVIES 
    movies: [],

    inputValue: "",

    firstAPIcall: "https://api.themoviedb.org/3/discover/movie?api_key=4e2a533e46ec71346f9b1fdf830c85b5&query=&language=it-IT",

    APIcall: "https://api.themoviedb.org/3/search/movie?api_key=4e2a533e46ec71346f9b1fdf830c85b5",

    APIquery: "&query=",




    // SERIES
    series: [],

    seriesInput: "",

    secondaAPIcall: "https://api.themoviedb.org/3/discover/tv?api_key=4e2a533e46ec71346f9b1fdf830c85b5&query=&language=it-IT",

    APIcall2: "https://api.themoviedb.org/3/search/tv?api_key=4e2a533e46ec71346f9b1fdf830c85b5",



    moviesStarsVote: "",
    seriesStarsVote: "",

   



})