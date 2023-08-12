import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
// @ts-ignore
import VueFullPage from 'vue-fullpage.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

createApp(App)
    .use(VueFullPage)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
