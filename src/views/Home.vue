<template>
<div class="home">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="Search Page" />
    <meta name="author" content="Travis Bassett" />

    <title>Feature Page</title>

    <!-- Custom fonts for this theme -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />

    <!-- Theme CSS -->
    <link href="css/freelancer.min.css" rel="stylesheet" />
  </head>
  <div class="container">
    <div class="jumbotron bg-secondary">
      <h1 class="display-1 text-center text-white">Search for a Movie</h1>
      <p class="text-center text-white">Information kindly provided by the OMBD API</p>
    </div>

    <body>
      <form v-on:submit.prevent="sendResult">
        <div class="form-group">
          <label for="searchitem">Search Phrase:</label>
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
    </body>

    <footer>
      <div class="jumbotron bg-secondary">
        <p class="text-center text-white">Copyright Travis Bassett 2019</p>
      </div>
    </footer>
  </div>
</div>

<!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>-->
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
  methods: {
    sendResult: function() {
      console.log(this.searchphrase);
      let searchObject = {
        searchphrase: this.searchphrase
      };
      this.$router.push({ name: "feature", params: { searchObject } });
    }
  }
};
</script>
