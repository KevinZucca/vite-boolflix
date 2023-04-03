<script>
import {store} from "../store.js";
import SeriesItem from "./SeriesItem.vue";

export default {
  name: "AppSeries",



  data() {
    return {
      store,
      language: "",
      emits: ["searchSeries"],


    }
  },

  components: {
    SeriesItem,
  },


  methods: { 
    checkLanguageFlag(flag) {
      if (flag == "en") {
        flag = "gb";
      } else if (flag == "ja") {
        flag = "jp"
      } else if (flag == "cs") {
        flag = "ch";
      } else if (flag == "hi") {
        flag = "hn";
      } else if (flag == "el") {
        flag = "gr";
      }
      return flag;
      
    },


    convertNumber(number) {
      const newNumber = Math.floor(Math.ceil(Number(number / 2)));
      this.store.seriesStarsVote = newNumber;
      return newNumber;
    }
  }
}
</script>
   
<template>
 <h2 id="title">TV Series</h2>
 <div id="container">

    <div class="card-container">
        <SeriesItem v-show="this.store.noResult == false" v-for="serie in store.series"
          :serie-image="store.imageAddress + serie.poster_path"
          :serie-title="serie.name"
          :serie-original-title="serie.original_name"
          :serie-flag="this.store.flagAddress + checkLanguageFlag(serie.original_language) + '.png'"
          :serie-vote="convertNumber(serie.vote_average)"
        ></SeriesItem>
        <p v-show="this.store.noResult == true" class="noResult-advise">{{ this.store.noResultContent }}</p>
    </div>
 </div>

</template>

<style lang="scss" scoped>
    #title {
        font-size: 40px;
        margin-left: 40px;
    }
   
</style>
