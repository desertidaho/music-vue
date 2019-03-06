<template>
  <div class="results row" v-if="results.length > 0">
    <div class="col-6 offset-1" id="song-results">
      <h3 class="ml-2 mt-4 mb-2">{{artistName}} results:</h3>
      <ul>
        <li class="" v-for="song in results" @click="setActiveSong(song)">
          {{song.trackName}},
          Album: {{song.collectionName}}
        </li>
      </ul>
    </div>
    <details-view :song="activeSong" v-if="activeSong.trackName"></details-view>
  </div>
</template>

<script>
  import DetailsView from "@/components/Details.vue";
  export default {
    name: "",
    props: ["artistName"],
    data() {
      return {
        activeSong: {}
      };
    },
    computed: {
      results() {
        let songs = this.$store.state.results;
        return songs;
      }
    },
    methods: {
      setActiveSong(song) {
        this.activeSong = song;
      }
    },
    components: {
      DetailsView
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
    color: white;
  }

  ul {
    list-style-type: none;
    padding: 2px;
  }

  li {
    display: inline-block;
    margin: 1px 10px;
    text-shadow: 2px 1px black;
    cursor: pointer;
    color: white;
  }

  a {
    color: black;
  }

  #song-results {
    margin-left: 2vw;
  }
</style>