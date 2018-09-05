<template>
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <a v-for="hero of heroes" :key="hero.id" class="col-1-4">
        <router-link :to="'/detail/' + hero.id">
          <div class="module hero">
            <img class="hero-image" :src="getImage(hero.img)"/>
            <h4>{{ hero.name }}</h4>
          </div>
        </router-link>
      </a>
    </div>

    <heroSearch></heroSearch>
  </div>
</template>

<script>
	import HeroService from '../service/HeroService';

	import heroSearch from '../components/HeroSearch';

	export default {
		name: 'Dashboard',
		components: {
			heroSearch
		},
		data() {
			return {
				loading: false,
				heroes: null
			};
		},
		created: function () {
			this.getHeroes();
		},
		methods: {
			getHeroes() {
				this.loading = true;
				HeroService.getHeroes().subscribe(heroes => {
					this.heroes = [
						heroes.find(h => h.name === 'Mega Man'),
						heroes.find(h => h.name === 'Air Man'),
						heroes.find(h => h.name === 'Flash Man'),
						heroes.find(h => h.name === 'Heat Man')
					];
					this.loading = false;
				});
			},
			getImage(image) {
				return require(`@/assets/images/${image}`);
			}
		}
	};
</script>

<style scoped>
  [class*="col-"] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }

  [class*="col-"]:last-of-type {
    padding-right: 0;
  }

  a {
    text-decoration: none;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .hero-image {
    height: 100px;
    margin-right: 50px;
  }

  h3 {
    text-align: center;
    margin-bottom: 0;
  }

  h4 {
    position: relative;
    align-self: center;
  }

  .grid {
    margin: 0;
  }

  .col-1-4 {
    width: 25%;
  }

  .module {
    padding: 10px;
    color: #eee;
    max-height: 140px;
    min-width: 120px;
    background-color: #607d8b;
    border-radius: 2px;
    display: flex;
  }

  .module:hover {
    background-color: #eee;
    cursor: pointer;
    color: #607d8b;
  }

  .grid-pad {
    padding: 10px 0;
  }

  .grid-pad > [class*="col-"]:last-of-type {
    padding-right: 20px;
  }

  @media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px;
    }
  }

  @media (max-width: 1024px) {
    .grid {
      margin: 0;
    }

    .module {
      min-width: 60px;
    }
  }
</style>
