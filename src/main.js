import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

    const routes = [
        { path: '/', component: App },
    ]
  
    const router = createRouter({
        routes,
        history: createWebHistory(),
    })


createApp(App).use(store).use(router).mount('#app');




