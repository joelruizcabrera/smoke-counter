import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { persistDataToStore } from "@/persist";
persistDataToStore();
createApp(App).use(store).use(router).mount('#app');
//# sourceMappingURL=main.js.map