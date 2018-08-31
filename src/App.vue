<template>
  <div id="app">
    <h1>{{title}}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view></router-view>
    <messages></messages>
  </div>
</template>

<script>
	import messages from './components/Messages';

	export default {
		name: 'app',
		components: {
			messages
		},
		data() {
			return {
				title: 'Tour of Heroes'
			};
		}
	};
</script>

<style>
  /* Application-wide Styles */
  h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }

  h2, h3 {
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
  }

  body {
    margin: 2em;
  }

  body, input[text], button {
    color: #888;
    font-family: Cambria, Georgia;
  }

  /* everywhere else */
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
