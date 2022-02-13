<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

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
    background-color: #ffffffb8;
    border-radius: 0.6em;
    padding: 2em;
    margin: auto;
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
    background-color: #aeaeaeef;
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
    justify-content: space-around;
    font-size: 1.2em;
    font-weight: 500;
    color: black;
  }

  #nav {
    font-size: 1.2em;
    padding: 30px;
    background-color: #233654b8 !important;
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

  .bgColor {
    color: white !important;
  }

</style>
