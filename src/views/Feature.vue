<template>
  <div class="feature">
    <div class="container">
      <div class="jumbotron bg-secondary">
        <h1 class="display-1 text-center text-white">{{ results.Title }}</h1>
        <p class="text-center text-white">Information kindly provided by the OMBD API</p>
      </div>

      <p class="text-center text-white">Information kindly provided by the OMBD API</p>
      
      <div class="header1">
      <h4>Plot</h4>
      </div>

      {{ results.Plot }}
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
  created: function() {
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
h1,h4 {
  padding-bottom: 1rem,
}
.header1 {
  background-color:cornflowerblue;
  border: 2px solid;
  border-radius: 6px;
}
.header2 {
  background-color: cornflowerblue;
  border: 2px solid;
  margin-top: 2rem;
  border-radius: 6px;
  
}
img {
  border: 1.2px solid;
  margin: 1rem;
  border-radius: 6px;
}

.container
{
  background-color:cornsilk
}

</style>