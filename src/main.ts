import { createApp } from 'vue'
import './styles/style.css'
import './styles/main.css'
import App from './App.vue'

import { registerPlugins } from './plugins/index'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
