<template>
  <div class="feature">
    <h1>{{ featuretitle }}</h1>
    <p class="text-center text-white">Information kindly provided by the OMBD API</p>
        <img :src="results.Poster">
        <h4>Plot</h4>
        {{ results.Plot }}
        <h4>Move Details:</h4>
        <p>Year: {{results.Year}}</p>
        <p>Rated: {{results.Rated}}</p>
        <p>Released: {{results.Released}}</p>
        <p>Runtime: {{results.Runtime}}</p>
        <p>Genre: {{results.Genre}}</p>
        <p>Director: {{results.Director}}</p>
        {{ results }}
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
