<script>
import {store} from "../store.js";

export default {
  name: "AppCard",


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
 <div class="card" v-for="card in store.cards">
    <h3 class="title">{{ card.title }}</h3>
    <h4 class="original-title"> {{ card.original_title }}</h4>
    <p class="language">{{card.original_language}}</p>
    <p class="vote">{{card.vote_count}}</p>
 </div>

</template>

<style lang="scss" scoped>
    .card {
        height: 250px;
        width: 200px;

        background-color: white;
        border: 1px solid black;
        text-align: center;
        color: black;
        line-height: .8;

        display: flex;
        flex-flow: column wrap;
    }

</style>
