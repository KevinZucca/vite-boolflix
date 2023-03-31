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
    <div id="input-container">
        <input v-model="store.seriesInput" @keyup.enter="$emit('searchSeries')" type="text" placeholder="Cerca">
        <button class="goButton" @click="$emit('searchSeries')">Vai</button>
    </div>
    <div id="series-container">
        <SeriesItem v-for="serie in store.series"
          :serie-image="store.imageAddress + serie.poster_path"
          :serie-title="serie.name"
          :serie-original-title="serie.original_name"
          :serie-flag="this.store.flagAddress + checkLanguageFlag(serie.original_language) + '.png'"
          :serie-vote="convertNumber(serie.vote_average)"
        ></SeriesItem>
    </div>
 </div>

</template>

<style lang="scss" scoped>
    #title {
        font-size: 40px;
        text-align: center;
    }

    #container {
        
       #input-container {
            display: flex;
            justify-content: center;

            margin: 50px auto;
       }
        
        #series-container {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 20px;

            margin: 50px auto;
        }
    }
</style>
