import Vue from 'vue';
import App from './App.vue';
import VueRx from 'vue-rx';

import './filters/uppercase';

import router from './router';

import './assets/css/styles.css';

Vue.config.productionTip = false;

Vue.use(VueRx);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
