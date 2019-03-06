<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1 class="text-white mt-3">ListenUp <i class="fas fa-arrow-circle-up arrow mt-3"></i> </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center mt-3">
        <form @submit.prevent="search" class='form-inline'>
          <input type="text" placeholder=" Enter artist, song, or album..." v-model="query" required id="title-input"
            class="shadow-lg">
          <button class="btn btn-sm btn-outline-light ml-2 shadow-lg" type="submit">Search</button>
        </form>
      </div>
    </div>
    <results :artistName="artistName" v-if="searched"></results>
  </div>
</template>

<script>
  import Results from '@/components/Results.vue'

  export default {
    name: 'home',
    data() {
      return {
        artistName: '',
        query: '',
        searched: false
      }
    },
    computed: {
    },
    methods: {
      search() {
        this.artistName = this.query
        this.searched = true
        this.$store.dispatch('getMusic', this.query)
        this.query = ''
      }
    },
    components: {
      Results
    }
  }
</script>

<style>
  .home {
    background: url('../assets/img/music2.jpg');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 140%;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 1.1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  input[type="text"]#title-input::-webkit-input-placeholder {
    font-weight: 600;
    color: rgb(148, 5, 148);
  }

  #title-input {
    width: 300px;
  }
</style>