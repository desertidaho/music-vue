<template>
  <div class="results row" v-if="results.length > 0">
    <div class="col-6" id="song-results">
      <h2 class="text-white ml-2 mt-4">{{artistName}} results:</h2>
      <ul>
        <li class="text-white" v-for="song in results" @click='setActiveSong(song)'>
          {{song.trackName}} :
          {{song.collectionName}}</li>
      </ul>
    </div>
    <details-view :song='activeSong' v-if="activeSong.trackName"></details-view>
  </div>
</template>

<script>
  import DetailsView from '@/components/Details.vue'
  export default {
    name: '',
    props: ['artistName'],
    data() {
      return {
        activeSong: {}
      }
    },
    computed: {
      results() {
        let songs = this.$store.state.results
        return songs
      }
    },
    methods: {
      setActiveSong(song) {
        this.activeSong = song
      }
    },
    components: {
      DetailsView
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    text-shadow: 2px 1px black;
    cursor: pointer;
  }

  a {
    color: black;
  }
</style>