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
    resetPage() {
      window.location.reload()
    }
  }
}
</script>
   
<template>
 <div id="header">    
    <div id="logo" @click="resetPage()">
       <img src="/public/images/logo.png" alt="boolflix-logo">   
    </div>
    <div id="input-container">
        <input v-model="store.inputValue" @keyup.enter="$emit('searchClicked');" type="text" placeholder="Cerca">
        <button class="goButton" @click="$emit('searchClicked');">Vai</button>
    </div>
    
 </div>

</template>

<style lang="scss" scoped>
    #header {
        display: flex;
        justify-content: space-around;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.858);
        height: 100px;

        #logo {
          cursor: pointer;
        }

    }
</style>
