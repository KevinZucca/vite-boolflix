<script>
import {store} from "../store.js";

export default {
  name: "AppHeader",


  data() {
    return {
      store,
    }
  },

  methods: {

  }
}
</script>
   
<template>
 <div class="container">
    <button @click="$emit('prevPage')" class="arrow">&leftarrow;</button>
    <div id="logo">
       <img src="/public/images/logo.png" alt="boolflix-logo">   
    </div>
    <div id="input-container">
        <input v-model="store.inputValue" @keyup.enter="$emit('searchClicked')" type="text" placeholder="Cerca">
        <button @click="$emit('searchClicked')">Vai</button>
    </div>
    <button @click="$emit('nextPage')" class="arrow">&rightarrow;</button>

 </div>

</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;

        #logo {
          cursor: pointer;
        }


        .arrow {
          height: 50px;
          width: 60px;

          font-size: 30px;
        }
    }
</style>
