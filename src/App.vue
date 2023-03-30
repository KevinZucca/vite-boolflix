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

  created() {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4e2a533e46ec71346f9b1fdf830c85b5&query=&language=it-IT").then((res)=> {
        this.store.cards = res.data.results;
      })
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    searchTitle() {
      let newList = this.store.APIcall + this.store.APIquery + this.store.inputValue;

      axios.get(newList).then((res)=> {
        this.store.cards = res.data.results;
      })
    }
  }
}
</script>

<template>
  <AppHeader @searchClicked="searchTitle()"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>
</style>
