import { of } from 'rxjs';

import { HEROES } from '../model/mock-heroes';

import MessageService from './MessageService.js';

export default {
	getHeroes() {
		// TODO: send the message _after_ fetching the hero
		MessageService.add('HeroService: fetched heroes');
		return of(HEROES);
	},
	getHero(id) {
		// TODO: send the message _after_ fetching the hero
		MessageService.add(`HeroService: fetched hero id=${id}`);
		return of(HEROES.find(hero => hero.id === id));
	},
	searchHero(heroName) {
		return of(HEROES.filter(hero => hero.name.toLowerCase().includes(heroName.toLowerCase())));
	},
	save(hero) {
		const heroToUpdate = HEROES.find(hero => hero.id === hero.id);
		heroToUpdate.name = hero.name;
		return of('Success');
	},
	add(heroName) {
		const newId = HEROES[HEROES.length - 1].id + 1;
		const hero = {
			id: newId,
			name: heroName
		};
		HEROES.push(hero);
		return of(hero);
	},
	delete(hero) {
		HEROES.splice(HEROES.indexOf(hero), 1);
		return of(hero.name);
	}
};
