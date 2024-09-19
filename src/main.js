import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import About from './AboutView.vue';
import Home from './components/Home.vue';
import Mascotas from './Mascotas.vue';
import Details from './Details.vue'
import PathNotFound from './PathNotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: About },
  { path: '/user/:id', component: Details },
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
