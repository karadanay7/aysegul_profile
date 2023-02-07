import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  '@/assets/style.css'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import {faInstagram}  from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';


/* add icons to the library */
library.add([faQuoteLeft,faQuoteRight,faLinkedin,faInstagram,faEnvelope,faGithub])


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
