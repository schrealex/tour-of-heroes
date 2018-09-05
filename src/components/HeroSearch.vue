<template>
  <div id="search-component">
    <h4>Hero Search</h4>

    <input v-model="searchQuery" id="search-box" v-on:keyup="search(searchQuery)"/>

    <ul class="search-result">
      <li v-for="hero of heroes" :key="hero.id">
        <router-link :to="'/detail/' + hero.id">
          <img class="hero-image" :src="getImage(hero.img)"/><span class="hero-name">{{ hero.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
	import HeroService from '../service/HeroService';

	export default {
		name: 'HeroSearch',
		data() {
			return {
				searchQuery: null,
				heroes: null
			};
		},
		methods: {
			search(query) {
				HeroService.searchHero(query).subscribe(result => {
					this.heroes = result;
				});
			},
			getImage(image) {
				return require(`@/assets/images/${image}`);
			}
		}
	};
</script>

<style scoped>
  /* HeroSearch private styles */
  .search-result li {
    border: 1px solid gray;
    width: 220px;
    height: 40px;
    padding: 5px 5px 15px 15px;
    margin-bottom: 5px;
    background-color: white;
    cursor: pointer;
    list-style-type: none;
  }

  .search-result li:hover {
    background-color: #607D8B;
    color: #FFF;
  }

  .search-result li a {
    display: block;
    color: #000;
    text-decoration: none;
  }

  .search-result li a .hero-image {
    display: inline-block;
    height: 50px;
  }

  .search-result li a .hero-name {
    margin-left: 10px;
    vertical-align: middle;
  }

  .search-result li a:active {
    color: #FFF;
  }

  .search-result li a:hover {
    color: #FFF;
  }

  #search-box {
    width: 204px;
    height: 20px;
  }

  ul.search-result {
    margin-top: 15px;
    padding-left: 0;
  }
</style>
