<template>
  <div class="feature">
    <div class="container">
      <div class="jumbotron bg-secondary">
        <!-- displays the move title as an h1 element -->
        <h1 class="display-1 text-center text-white">{{ results.Title }}</h1>
        <p class="text-center text-white">Information kindly provided by the OMBD API</p>
      </div>

      <p class="text-center text-white">Information kindly provided by the OMBD API</p>
      
      <div class="header1">
      <h4>Plot</h4>
      </div>

      <!-- displays the movie plot -->
      {{ results.Plot }}
      
      <!-- uses bootstrap-vue features to display movie poster and movie details nicely -->
      <div class="row">
        <div class="col-sm-5">
          <img :src="results.Poster" />
        </div>

        <div class="col-sm-7">
          <div class="header2">
          <h4>Move Details:</h4>
          </div>
          <p>Year: {{results.Year}}</p>
          <p>Rated: {{results.Rated}}</p>
          <p>Released: {{results.Released}}</p>
          <p>Runtime: {{results.Runtime}}</p>
          <p>Genre: {{results.Genre}}</p>
          <p>Director: {{results.Director}}</p>
        </div>
      </div>

      <div class="jumbotron bg-secondary">
        <p class="text-center text-white">Copyright Travis Bassett 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
//imports axios from dev environment, installed with NPM
import axios from "axios";

export default {
  name: "Feature",
  data() {
    return {
      results: null,
      errors: [],
      featuretitle: ""
    };
  },
  
  //API call for single title search, with developer API key
  created: function() {
    //retrieves searchphrase form home.vue from router push for API call
    this.featuretitle = this.$route.params.searchObject.searchphrase;
    console.log(this.featuretitle);
    axios
      .get("https://www.omdbapi.com/", {
        params: {
          t: this.featuretitle,
          apikey: "888d223e"
        }
      })
      .then(response => {
        this.results = response.data;
        console.log(this.results);
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*adding padding to h1 and h2 elements*/
h1,h4 {
  padding-bottom: 1rem,
}
/*unique header styling, replicates bootstrap-vue*/
.header1 {
  background-color: #6c757d;
  border-radius: 4px;
  color: white;
}
/*unique header styling, replicates bootstrap-vue, different that .header1 because of needed margin-top rule*/
.header2 {
  background-color: #6c757d ;
  margin-top: 2rem;
  border-radius: 4px;
  color: white;  
}
img {
  border: 1.2px solid;
  margin: 1rem;
  border-radius: 6px;
}

</style>