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
    },

    
  },

}
</script>
   
<template>
 <h2 id="title">Movies</h2>
 <div class="card-container">
    <MovieItem v-if="this.store.movies.length > 0" v-for="(movie, index) in store.movies"
    :index="index"
    :movie-image="store.imageAddress + movie.poster_path" 
    :movie-title="movie.title"
    :movie-original-title="movie.original_title"
    :movie-flag="this.store.flagAddress + checkLanguageFlag(movie.original_language) + '.png'"
    :movie-vote="convertNumber(movie.vote_average)"></MovieItem>

    <p v-else class="noResult-advise">Nessun risultato</p>


    <div class="scroll-arrow" @click="moveCardsContainer()">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
 </div>

</template>

<style lang="scss" scoped>

    #title {
      font-size: 40px;
      margin-left: 20px;
    }

    .scroll-arrow {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translate(-50%, -50%);

      cursor: pointer;

      color: rgba(0, 0, 0, 0.715);
      background-color: #ffffff8b;
      font-size: 25px;
      border-radius: 50%;

      padding: 10px 20px;
    }

</style>
