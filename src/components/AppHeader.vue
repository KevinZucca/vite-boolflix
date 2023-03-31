<script>
import {store} from "../store.js";

export default {
  name: "AppHeader",

  data() {
    return {
      store,
      emits: ["searchClicked", "prevPage", "nextPage"],


    }
  },

  methods: {

  }
}
</script>
   
<template>
 <div id="header">
    <button @click="$emit('prevPage')" class="arrow">&leftarrow;</button>
    <div id="logo">
       <img src="/public/images/logo.png" alt="boolflix-logo">   
    </div>
    <div id="input-container">
        <input v-model="store.inputValue" @keyup.enter="$emit('searchClicked')" type="text" placeholder="Cerca">
        <button class="goButton" @click="$emit('searchClicked')">Vai</button>
    </div>
    <button @click="$emit('nextPage')" class="arrow">&rightarrow;</button>

 </div>

</template>

<style lang="scss" scoped>
    #header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.858);
        height: 100px;

        #logo {
          cursor: pointer;
        }


        .arrow {
          height: 50px;
          width: 60px;
          margin: 20px;

          font-size: 30px;
        }
    }
</style>
