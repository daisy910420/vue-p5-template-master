import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app').use(VCalendar, {
    componentPrefix: 'vc',
  });
import VCalendar from 'v-calendar'; // 引入日曆插件

