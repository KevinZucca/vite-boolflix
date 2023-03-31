<script>
import {store} from "../store.js";
import MovieItem from "./MovieItem.vue";

export default {
  name: "AppMovies",


  data() {
    return {
      store,
    }
  },

  components: {
    MovieItem,

  },

  methods: {
    
  }
}
</script>
   
<template>
 <h2 id="title">Movies</h2>
 <div id="container">
    <MovieItem></MovieItem>
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
