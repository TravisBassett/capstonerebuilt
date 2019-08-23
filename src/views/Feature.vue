<template>
  <div class="feature">
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
      .get("http://www.omdbapi.com/", {
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
