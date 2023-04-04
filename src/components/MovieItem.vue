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
    showDetails(event) {    
     
     const activeCard = event.srcElement;

     activeCard.classList.toggle("active")
    }
  },

  props: {
    movie: Object,
    index: Number,
    movieImage: String,
    movieTitle: String,
    movieOriginalTitle: String,
    movieFlag: String,
    movieVote: String,
    movieOverview: String,
  },
  

}
</script>
   
<template>
 <div class="card" @click="showDetails($event)">
    <img class="poster" :src="movieImage" alt="movie-image">
    <div class="card-content">
        <h3 class="card-title">{{ movieTitle }}</h3>
        <h4 class="original-title">( {{ movieOriginalTitle }} )</h4>
        <p>Lingua originale</p>
        <img class="country-flag" :src="movieFlag">
        <div class="stars">
          <i v-for="star in store.moviesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i><i v-for="star in 5 - store.moviesStarsVote" class="fa-solid fa-star vote" style="color: white;"></i>
        </div>
        <p class="overview">{{movieOverview}}</p>
    </div> 
 </div>

</template>

<style lang="scss" scoped>


.overview {
  font-size: .8em;
}
</style>
