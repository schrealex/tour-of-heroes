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
  /* AppComponent's private CSS styles */
  h1 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2em;
    margin-top: 15px;
    padding-top: 0;
  }

  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }

  nav a:visited, a:link {
    color: #607d8b;
  }

  nav a:hover {
    color: #039be5;
    background-color: #cfd8dc;
  }

  nav a.active {
    color: #039be5;
  }
</style>
