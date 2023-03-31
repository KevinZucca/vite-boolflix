<script>
import {store} from "../store.js";
import MovieItem from "./MovieItem.vue";

export default {
  name: "AppMovies",


  data() {
    return {
      store,
      language: "",

    }
  },

  components: {
    MovieItem,

  },

  methods: {
    checkLanguageFlag(flag) {
      if (flag == "en") {
        flag = "gb";
      } else if (flag == "ja") {
        flag = "jp"
      } else if (flag == "cs") {
        flag = "ch";
      } else if (flag == "hi") {
        flag = "hn";
      } else if (flag == "el") {
        flag = "gr";
      }
      return flag;
    },


    convertNumber(number) {
      const newNumber = Math.floor(Math.ceil(Number(number / 2)));
      this.store.moviesStarsVote = newNumber;
      return newNumber;
    }
    
  },

}
</script>
   
<template>
 <h2 id="title">Movies</h2>
 <div id="container">
    <MovieItem v-for="movie in store.movies"
    :movie-image="store.imageAddress + movie.poster_path" 
    :movie-title="movie.title"
    :movie-original-title="movie.original_title"
    :movie-flag="this.store.flagAddress + checkLanguageFlag(movie.original_language) + '.png'"
    :movie-vote="convertNumber(movie.vote_average)"></MovieItem>
 </div>

</template>

<style lang="scss" scoped>

    #title {
      font-size: 40px;
      text-align: center;
    }


    #container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 20px;

        margin: 50px auto;

    }
</style>
