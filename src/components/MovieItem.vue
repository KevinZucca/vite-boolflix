<script>
import {store} from "../store.js";
import '@fortawesome/fontawesome-free/css/all.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
  name: "MovieItem",


  data() {
    return {
      store,
      language: "",

    }
  },

  methods: {
    
  },

  props: {
    movie: Object,
    movieImage: String,
    movieTitle: String,
    movieOriginalTitle: String,
    movieFlag: String,
    movieVote: String,
  },


}
</script>
   
<template>
 <div class="card">
    <img class="poster" :src="movieImage" alt="movie-image">
    <h3 class="title">{{ movieTitle }}</h3>
    <h4 class="original-title">( {{ movieOriginalTitle }} )</h4>
    <p>Lingua originale</p>
    <img class="country-flag" :src="movieFlag">
    <div class="stars">
      <i v-for="star in store.moviesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i>
    </div>
 </div>

</template>

<style lang="scss" scoped>

</style>
