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
    <div id="logo">
        Boolflix    
    </div>
    <div id="input-container">
        <input v-model="store.inputValue" @keyup.enter="$emit('searchClicked')" type="text" placeholder="Cerca">
        <button @click="$emit('searchClicked')">Vai</button>
    </div>
 </div>

</template>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>
