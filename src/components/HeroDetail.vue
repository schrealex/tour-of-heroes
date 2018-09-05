<template>
  <div id="hero-detail">
    <div v-if="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label>name:
          <input v-model="hero.name" placeholder="name">
        </label>
        <img class="hero-image" :src="getImage(hero.img)"/>
      </div>
      <button v-on:click="goBack()">go back</button>
      <button v-on:click="save()">save</button>
    </div>
  </div>
</template>

<script>
	import HeroService from '../service/HeroService';

	export default {
		name: 'HeroDetail',
		created: function () {
			this.getHero();
		},
		data() {
			return {
				hero: null
			};
		},
		methods: {
			getHero() {
				const id = +this.$route.params.id;
				HeroService.getHero(id).subscribe(hero => this.hero = hero);
			},
			getImage(image) {
				return require(`@/assets/images/${image}`);
			},
			goBack() {
				this.$router.go(-1);
			},
			save() {
				HeroService.save(this.hero).subscribe(() => this.goBack());
			}
		}
	};
</script>

<style scoped>
  /* HeroDetailComponent's private CSS styles */
  label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
  }

  input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
  }

  button {
    margin: 20px 5px 0 0;
    font-family: Arial, sans-serif;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }

  .hero-image {
    height: 300px;
    display: block;
  }
</style>
