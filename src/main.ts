import { createApp } from 'vue'
import { GlobalCmComponent } from "codemirror-editor-vue3";
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
app.use(GlobalCmComponent)
app.mount('#app')
