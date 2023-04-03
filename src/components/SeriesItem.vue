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
    showDetails(event) {    
     const activeCard = event.srcElement;

     activeCard.classList.toggle("active")
    }
    
  },

  props: {
    serie: Object,
    serieImage: String,
    serieTitle: String,
    serieOriginalTitle: String,
    serieFlag: String,
    serieVote: String,
    serieOverview: String,
  }
}
</script>
   
<template>
 <div class="card" @click="showDetails($event)">
    <img class="poster" :src="serieImage" alt="">
    <div class="card-content">
        <h3 class="card-title">{{ serieTitle }}</h3>
        <h4 class="original-title"> {{ serieOriginalTitle }}</h4>
        <p>Lingua originale</p>
        <img class="country-flag" :src="serieFlag">
        <div class="stars">
          <i v-for="star in store.seriesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i>
        </div>
        <p class="overview">{{serieOverview}}</p>
  </div>
 </div>

</template>

<style lang="scss" scoped>
.overview {
  font-size: .8em;
}
</style>
