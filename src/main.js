import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

//import store
import store from './store'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

const app = createApp(App)

//use vue router
app.use(router)

//use vue store
app.use(store)

app.mount('#app')