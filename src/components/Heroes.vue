<template>
  <div id="heroes">
    <h2>My Heroes</h2>

    <div>
      <label>Hero name:
        <input v-model="heroName" placeholder="name">
      </label>
      <button v-on:click="addHero(heroName); heroName=''">
        add
      </button>
    </div>

    <ul class="heroes">
      <li v-for="hero of heroes" :key="hero.id">
        <a>
          <router-link :to="'/detail/' + hero.id">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </router-link>
        </a>
        <button class="delete" title="delete hero" v-on:click="deleteHero(hero)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>

	import HeroService from '../service/HeroService';

	export default {
		name: 'Heroes',
		components: {},
		created: function () {
			this.getHeroes();
		},
		data() {
			return {
				heroName: null,
				heroes: null
			};
		},
		methods: {
			getHeroes() {
				HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
			},
			addHero(name) {
				name = name.trim();
				if (!name) {
					return;
				}
				HeroService.add(name).subscribe(hero => {
					// eslint-disable-next-line no-console
					console.log('Succesfully added hero ' + hero.name);
				});
			},
			deleteHero(hero) {
				// this.heroes = this.heroes.filter(h => h !== hero);
				HeroService.delete(hero).subscribe(result => {
					// eslint-disable-next-line no-console
					console.log('Succesfully deleted hero ' + result);
				});
			}
		}
	};
</script>

<style scoped>
  /* HeroesComponent's private CSS styles */
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }

  .heroes li {
    position: relative;
    cursor: pointer;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }

  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  .heroes a {
    color: #888;
    text-decoration: none;
    position: relative;
    display: block;
    width: 250px;
  }

  .heroes a:hover {
    color: #607D8B;
  }

  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    min-width: 16px;
    text-align: right;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-family: Arial;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button.delete {
    position: relative;
    left: 194px;
    top: -32px;
    background-color: gray !important;
    color: white;
  }
</style>
