<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1><img src="./assets/icon.png"> Groupomania SN</h1>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Footer from './components/FooterLink'

  export default {
    name:"App",
    components: {
      Footer
    }
  }
</script>

<style>
  h1 {
    font-size: xxx-large;
    margin: 1em;
    color: white;
  }

  h3{
    font-size: 1.9em;
  }

  img {
    width: 1.2em;
    margin-bottom: -0.4em;
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
    background-color: #aeaeae;
    background-image: url(assets/logo.png);
    background-position:50% 50%;
    background-repeat: repeat-x;
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
    color: white;
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

  #nav {
    opacity: 75%;
    background-color: #233654 !important;
  }

  .bgColor {
    background-color: #233654 !important;
    color: white !important;
  }

</style>
