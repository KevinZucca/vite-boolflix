<script>
import {store} from "../store.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";


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
    <h3 class="title">{{ serieTitle }}</h3>
    <h4 class="original-title"> {{ serieOriginalTitle }}</h4>
    <p>Lingua originale</p>
    <img class="country-flag" :src="serieFlag">
    <p class="vote">{{serieVote}}</p>
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
