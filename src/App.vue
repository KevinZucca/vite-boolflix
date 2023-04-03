<script>

import {store} from "../src/store.js";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppMovies from "./components/AppMovies.vue";
import AppSeries from "./components/AppSeries.vue";
import axios from "axios";
import { createStructuralDirectiveTransform } from "@vue/compiler-core";

export default {
  data() {
    return {
      store,

    }
  },

  created() {
    axios.get(store.firstAPIcall).then((res)=> {
        this.store.movies = res.data.results;
      })

    axios.get(store.secondaAPIcall).then((res)=> {
      this.store.series = res.data.results;
    })

  },

  components: {
    AppHeader,
    AppJumbo,
    AppMovies,
    AppSeries,
  },

  methods: {

    searchTitle() {
      let newMoviesList = this.store.APIcall + this.store.APIquery + this.store.inputValue;

      axios.get(newMoviesList).then((res)=> {
        this.store.movies = res.data.results;
        this.store.showJumbo = false;
      })


      let newSeriesList = this.store.APIcall2 + this.store.APIquery + this.store.inputValue;

      axios.get(newSeriesList).then((res)=> {
        this.store.series = res.data.results;
        this.store.showJumbo = false;
      })
    },
  }
}
</script>

<template>
  <AppHeader @prevPage="goPrevPage()" @nextPage="goNextPage()" @searchClicked="searchTitle()"></AppHeader>
  <AppJumbo></AppJumbo>
  <AppMovies></AppMovies>
  <AppSeries></AppSeries>
</template>

<style lang="scss" scoped>
</style>
