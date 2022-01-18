<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>Groupomania</h1>
    <div id="start">
      <Signup/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/FooterLink'
  import Signup from './components/Signup'

  export default {
    name:"App",
    components: {
      Signup,
      Footer
    }
  }
</script>

<style>
  h1 {
    font-size: xxx-large;
    margin: 1em;
  }

  h3{
    font-size: 1.9em;
  }

  form {
    width: 80%;
    background-color: white;
    opacity: 80%;
    border-radius: 0.6em;
    padding: 2em;
  }

  .mr-4 {
    margin: 2em;
    color: white!important;
    font-weight: bold;
    background-color: #d1515a!important;
  }

  .log {
    display: flex;
  }

  body {
    background-color: #adadad;
    background-image: url(assets/logo.png);
    background-position:50% -20%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #start {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }

  #nav {
    font-size: 1.2em;
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  span{
    cursor: pointer;
    color: dodgerblue;
    font-weight: bold;
  }

  #nav a.router-link-exact-active {
    color: #d1515a;
  }

  footer {
    opacity: 75%;
    margin-top: 6em;
  }
</style>
