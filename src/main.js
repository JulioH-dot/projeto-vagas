import { createApp } from 'vue'
import App from './App.vue'

//importando mitt

import mitt from 'mitt'

//instancia do mitt
const emitter = mitt()

//iniciando a instancia do vue com base no componete app

const app = createApp(App)

// agora devemos configurar a instância do pacote mitt como sendo
// uma propriedade global
// essa propriedade estará disponível para todas as instâncias
// de componentes dentro do App

app.config.globalProperties.emitter = emitter

// associar a instância do Vue com o elemento HTML

app.mount('#app')

//createApp(App).mount('#app')
