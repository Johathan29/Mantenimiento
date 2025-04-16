import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import About from './About.vue';
import Home from './components/Home.vue';
import Mascotas from './Mascotas.vue';
import PathNotFound from './PathNotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/mascotas', component: Mascotas },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);

app.use(router);

app.mount('#app');
