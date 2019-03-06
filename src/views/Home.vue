<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1 class="text-white mt-3">Music-Vue</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center mt-3">
        <form @submit.prevent="search" class='form-inline'>
          <input type="text" placeholder=" Title..." v-model="query" required id="title-input">
          <button class="btn btn-sm btn-outline-light ml-2" type="submit">Search</button>
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
    background: url('https://i.ibb.co/3T2YByq/music2.jpg');
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }

  input[type="text"]#title-input::-webkit-input-placeholder {
    font-weight: 600;
    color: rgb(148, 5, 148);
  }

  #title-input {
    width: 300px;
  }
</style>