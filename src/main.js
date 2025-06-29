import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import About from './AboutView.vue';
import Home from './components/Home.vue';
import Mascotas from './Mascotas.vue';
import Details from './Details.vue'
import Contacts from './page/contacts.vue'
import Alert from './page/terminos.vue'
import Registrar from './page/Registrar.vue'
import Setting from './Setting.vue'
import PathNotFound from './PathNotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import VueSplide from '@splidejs/vue-splide';
const routes = [
  { path: '/', component: Home },
  { path: '/users', component: About },
  { path: '/user/:username', component: Setting },
  { path: '/registrar', component: Registrar },
  { path: '/contacts', component: Contacts },
  { path: '/terminos', component: Alert },
  { path: '/users/:iduser&name=:firstname',
  name: 'profile',  component: Details },
  { path: '/mascotas', component: Mascotas },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];
const router = createRouter({
  history: createWebHashHistory(),
  
  routes,
});

const app = createApp(App);
app.use(VueSplide);
app.use(router);

app.mount('#app');
