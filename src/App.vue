<script>

import {store} from "../src/store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    searchSomething() {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=4e2a533e46ec71346f9b1fdf830c85b5&query=title").then((res)=> {
        this.store.cards = res.data.results;
      })
    }
  }
}
</script>

<template>
  <AppHeader @searchClicked="searchSomething()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>
</style>
