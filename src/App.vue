<template>
  <NavBar />
  <router-view /> 
  <BottomNav />  
</template>

<script>

import NavBar from './components/NavBar.vue'
import BottomNav from './components/BottomNav.vue'
import {useHead} from '@vueuse/head'

export default {
  name: 'App',
  components: {
    NavBar,
    BottomNav,
  },
  setup(){
    useHead({
      title: "AysegulKaradan",
      meta: [
        {
          name : "description",
          content: "Aysegul Karadan"
        }
      ]
    })
  }
}

</script>

<style>
img {
  width: 400px;
  height: 400px;
}
</style>
