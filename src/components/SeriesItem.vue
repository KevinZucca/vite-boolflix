<script>
import {store} from "../store.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.css';



export default {
  name: "SeriesItem",


  data() {
    return {
      store,
    }
  },

  methods: {
    
  },

  props: {
    serie: Object,
    serieImage: String,
    serieTitle: String,
    serieOriginalTitle: String,
    serieFlag: String,
    serieVote: String,
  }
}
</script>
   
<template>
 <div class="card">
    <img class="poster" :src="serieImage" alt="">
    <div :class="store.viewDetails ? 'visible' : 'invisible'" class="card-content">
        <h3 class="title">{{ serieTitle }}</h3>
        <h4 class="original-title"> {{ serieOriginalTitle }}</h4>
        <p>Lingua originale</p>
        <img class="country-flag" :src="serieFlag">
        <div class="stars">
        <i v-for="star in store.seriesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i>
    </div>
  </div>
 </div>

</template>

<style lang="scss" scoped>
  .invisible {
    display: none;
  }

  .visible {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

</style>
