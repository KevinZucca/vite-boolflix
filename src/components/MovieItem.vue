<script>
import {store} from "../store.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
  name: "MovieItem",


  data() {
    return {
      store,
    }
  },

  methods: {
    
  }
}
</script>
   
<template>
 <div class="card" v-for="movie in store.movies">
    <img class="poster" :src="store.imageAddress + movie.poster_path" alt="">
    <h3 class="title">{{ movie.title }}</h3>
    <h4 class="original-title"> {{ movie.original_title }}</h4>
    <img class="country-flag" :src="this.store.flagAddress + movie.original_language + '.png'">
    <p class="vote">{{movie.vote_average}}</p>
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
