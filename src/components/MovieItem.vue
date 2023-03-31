<script>
import {store} from "../store.js";
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

  // created() {
  //     this.language = this.store.flagAddress + this.movie.original_language + '.png';
  //     console.log(this.language)
  //     console.log(this.movie.original_language)

  //     if(this.movie.original_language == "") {
  //       this.language = "Lingua sconosciuta"
  //     } else if (this.movie.original_language == "en") {
  //       this.language = this.store.flagAddress + "gb.png"
  //     }
  // }




}
</script>
   
<template>
 <div class="card">
    <img class="poster" :src="movieImage" alt="movie-image">
    <h3 class="title">{{ movieTitle }}</h3>
    <h4 class="original-title">( {{ movieOriginalTitle }} )</h4>
    <p>Lingua originale</p>
    <img class="country-flag" :src="movieFlag">
    <p class="vote">{{movieVote}}</p>
 </div>

</template>

<style lang="scss" scoped>
    .card {
        width: 200px;

        background-color: rgba(255, 255, 255, 0.221);
        text-align: center;
        color: black;
        line-height: .8;
        padding: 5px;

        display: flex;
        flex-flow: column wrap;
        align-items: center;
        box-shadow: 3px 3px 6px rgba($color: #000000df, $alpha: 1.0);


        &:hover {
          scale: 1.1;
        }



        img {
          pointer-events: none;
        }

        .country-flag {
          width: 25px;
          height: 20px;
        }
    }

</style>
