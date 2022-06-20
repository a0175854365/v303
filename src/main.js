import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// app
const app = createApp(App)
app.mount('#app')
app.use(VueAxios, axios)


