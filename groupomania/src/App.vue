<script>
import HomeLink from './components/HomeLink.vue'

export default {
	name: 'App',
	components: {
		HomeLink
	}
}
</script>

<template>
	<div id="app">
		<nav>
			<HomeLink />
			<a href="/about">À propos</a>
			<a href="/contact">Contact</a>
		</nav>
		<p>Bienvenue sur notre page d'<HomeLink /></p>
	</div>
</template>
<!-- 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->