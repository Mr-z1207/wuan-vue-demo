import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@vant/touch-emulator';

import { Button, Field, Cell, CellGroup, Col, Row, SwipeCell  } from 'vant';

createApp(App)
.use(store)
.use(router)
.use(Button)
.use(Field)
.use(Cell)
.use(CellGroup)
.use(Col)
.use(Row)
.use(SwipeCell )
.mount('#app')
