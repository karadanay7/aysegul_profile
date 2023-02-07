<template>
  <NavBar />
  <router-view /> 
  <BottomNav />  
</template>

<script>

import NavBar from './components/NavBar.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BottomNav,
  }
}

</script>

<style>
img {
  width: 400px;
  height: 400px;
}
</style>
