<template>
  <div class="details col-5 offset-1">
    <img class="mt-5" :src="song.artworkUrl100" alt="">
    <h3 class="text-white mt-3">{{song.trackName}} by {{song.artistName}}</h3>
    <h4 class="text-white">Album: {{song.collectionName}}</h4>
    <h4 class="text-white" :released="released">Released: {{song.releaseDate}}</h4>
    <a class="text-white btn btn-sm btn-outline-light mt-2" :href="song.trackViewUrl" target="_blank">Download Track
      ${{song.trackPrice}} </a>
    <a class="text-white btn btn-sm btn-outline-light ml-3 mt-2" :href="song.collectionViewUrl" target="_blank">Download
      Album
      ${{song.collectionPrice}} </a>
    <audio controls class="my-audio ml-5 song-audio mt-4" id="playAudio" :src="song.previewUrl" type="audio/ogg">
    </audio>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['song'],
    data() {
      return {
        released: ''
      }
    },
    computed: {},
    methods: {
    }
  }
</script>

<style>
  .text-white {
    text-shadow: 2px 1px black;
  }

  img {
    height: 20vh;
    width: auto;
    margin-left: 8vw;
  }
</style>