<script>
import {store} from "../store.js";
import AppCard from "./AppCard.vue";

export default {
  name: "AppMain",


  data() {
    return {
      store,
    }
  },

  components: {
    AppCard,

  },

  methods: {

  }
}
</script>
   
<template>
 <div id="container">
    <AppCard></AppCard>
 </div>

</template>

<style lang="scss" scoped>
    #container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 20px;

        margin: 50px auto;

    }
</style>
