import { createApp } from 'vue'
import '@unocss/reset/normalize.css';//去除浏览器默认样式
import './style.css';//导入全局样式
import App from './App.vue';
import router from './router';
import 'uno.css'//引入unocss；
import { createPinia} from "pinia";
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
