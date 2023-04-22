import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus as fasPlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass as fasMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse as fasHome } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons'


library.add(fasPlus, fasMagnifyingGlass, fasHome, fasBookmark)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
