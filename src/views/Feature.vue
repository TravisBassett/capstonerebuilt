<template>
  <div class="feature">
    <div class="container">
    
      
    <div class="jumbotron bg-secondary">
      <h1 class="display-1 text-center text-white">{{ results.Title }}</h1>
      <p class="text-center text-white">Information kindly provided by the OMBD API</p>
    </div>

    <p class="text-center text-white">Information kindly provided by the OMBD API</p>

        <h4>Plot</h4>
        {{ results.Plot }}

        <div class="row">

        <div class="col-sm-5"><img :src="results.Poster"></div>

        <div class="col-sm-7">
        <h4>Move Details:</h4>
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
.drinksearch {
  font-size: 1.4rem;
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h4 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #ce1818;
}
</style>