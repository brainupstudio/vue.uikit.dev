import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFlashMessage from '@smartweb/vue-flash-message';

createApp(App)
    .use(router)
    .use(VueFlashMessage)
    .mount('#app')
