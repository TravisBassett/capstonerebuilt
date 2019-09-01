<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron bg-secondary">
        <h1 class="display-1 text-center text-white">Search for a Movie</h1>
        <p class="text-center text-white">Information kindly provided by the OMBD API</p>
      </div>

      <!-- form for the submission of a movie title -->
      <form v-on:submit.prevent="sendResult">
        <div class="form-group">
          <label for="searchitem">Search for a Movie:</label>
          <input
            type="text"
            class="form-control"
            id="searchphrase"
            placeholder="Search Phrase"
            name="searchphrase"
            required
            v-model="searchphrase"
          />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" class="btn btn-secondary m-3">Submit</button>
      </form>

      <div class="jumbotron bg-secondary">
        <p class="text-center text-white">Copyright Travis Bassett 2019</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      results: null,
      searchphrase: ""
    };
  },
  
  //A method that takes the search phrase from the form and router pushes it so it can be retrieved in another vue
  methods: {
    sendResult: function() {
      console.log(this.searchphrase);
      let searchObject = {
        searchphrase: this.searchphrase
      };
      this.$router.push({ name: "feature", params: { searchObject } });
    },
  
    track () {
      this.$ga.page('/')
    }
  }
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* style for the input element on the home page */
input {
  width: 300px;
  font-size: 1.4rem;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
  margin: auto;
  border: 2p black solid;
}

/* Styles for the search botton */
button {
  padding: 0.5rem;
  font-weight: 250;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}

</style>
