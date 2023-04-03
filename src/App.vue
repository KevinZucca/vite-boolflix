<script>

import {store} from "../src/store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMovies from "./components/AppMovies.vue";
import AppSeries from "./components/AppSeries.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
      pageIndex: "",
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
    AppMovies,
    AppSeries,
  },

  methods: {

    searchTitle() {
      let newMoviesList = this.store.APIcall + this.store.APIquery + this.store.inputValue;

      axios.get(newMoviesList).then((res)=> {
        this.store.movies = res.data.results;
      }).catch(()=> {
        this.store.noResult = true;
        this.store.noResultContent = "Nessun Risultato";
      })


      let newSeriesList = this.store.APIcall2 + this.store.APIquery + this.store.inputValue;

      axios.get(newSeriesList).then((res)=> {
        this.store.series = res.data.results;
      }).catch(()=> {
        this.store.noResult = true;
        this.store.noResultContent = "Nessun Risultato";
      })

    },

    goNextPage() {
      this.store.movies[this.pageIndex];

      let actualPage = this.store.firstAPIcall + "&page=" + this.pageIndex;
      this.pageIndex++;
      axios.get(actualPage).then((res)=> {
        this.store.movies = res.data.results;
      })
    },

    goPrevPage() {
      this.store.movies[this.pageIndex];

      let actualPage = this.store.firstAPIcall + "&page=" + this.pageIndex;
      this.pageIndex--;
      axios.get(actualPage).then((res)=> {
        this.store.movies = res.data.results;

      })
    }
  }
}
</script>

<template>
  <AppHeader @prevPage="goPrevPage()" @nextPage="goNextPage()" @searchClicked="searchTitle()"></AppHeader>
  <AppMovies></AppMovies>
  <AppSeries></AppSeries>
</template>

<style lang="scss" scoped>
</style>
