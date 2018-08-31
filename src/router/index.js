import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../components/Dashboard';
import Heroes from '../components/Heroes';
import HeroDetail from '../components/HeroDetail';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		path: '/dashboard',
		component: Dashboard
	},
	{
		path: '/heroes',
		component: Heroes
	},
	{
		path: '/detail/:id',
		component: HeroDetail
	}
];

export default new VueRouter({
	routes
});
