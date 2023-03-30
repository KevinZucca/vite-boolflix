import {reactive} from 'vue';

export const store = reactive ({

    cards: [],

    inputValue: "",

    APIcall: "https://api.themoviedb.org/3/search/movie?api_key=4e2a533e46ec71346f9b1fdf830c85b5",

    APIquery: "&query=",

    flagAddress: "https://flagcdn.com/48x36/",

})