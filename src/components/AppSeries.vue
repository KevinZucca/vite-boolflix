<script>
import {store} from "../store.js";
import SeriesItem from "./SeriesItem.vue";

export default {
  name: "AppSeries",


  data() {
    return {
      store,
    }
  },

  components: {
    SeriesItem,
  },

  methods: { 
  }
}
</script>
   
<template>
 <h2 id="title">Series TV</h2>
 <div id="container">
    <div id="input-container">
        <input v-model="store.seriesInput" @keyup.enter="$emit('searchSeries')" type="text" placeholder="Cerca">
        <button @click="$emit('searchSeries')">Vai</button>
    </div>
    <div id="series-container">
        <SeriesItem></SeriesItem>
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
