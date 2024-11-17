import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa Vue Router
import AddTask from './views/AddTask.vue';
import TaskList from './views/TaskList.vue';
import CombinedView from './views/CombinedView.vue';

const routes = [
  { path: '/addtask', component: AddTask },
  { path: '/tasklist', component: TaskList },
  { path: '/combinedview', component: CombinedView },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Define las rutas
});

const app = createApp(App);
app.use(router); // Usa Vue Router en tu aplicación
app.mount('#app');
