<template>
  <div class="navbar-container">
      <nav class="navbar  navbar-expand-md ">
    <div class="container ">
      <img src="../assets/logo-no-background.png" class="rounded float-left" alt="Aysegul logo">
      <router-link class="navbar-brand " to="/">AYSEGUL KARADAN</router-link>
      <div class="collapse navbar-collapse ">
        <ul class="navbar-nav d-flex justify-content-end w-100">
        
          <li class="nav-item mx-4">
            <router-link class="nav-link px-10 " to="/AboutMe">About Me</router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link px-10 " to="/Projects">Projects</router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link px-10 " to="/Blog">Blog</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>


<script>
export default {
  name: "NavBar",
};
</script>


<style scoped>
.navbar-container {
  position:fixed;
  color: white ;
  width:100vw;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 1;
}
.navbar {
  
  display: flex;
  justify-content: flex-end;
 
}
a {
  color: white;
  text-decoration: none;
  font-weight: semibold;
  white-space: nowrap;
}
.collapse {
  font-size: larger;
  
}
.nav-item{
  transition:all 1s;
}
.nav-item:hover{
  font-size: larger;
  text-decoration: underline;
  color: white;
  
}
.navbar-brand:hover, .navbar-brand:focus {
    color: white;
   
}
.nav-link:hover, .nav-link:focus {
    color: white;
}
img{
  width: 90px;
  height: 60px;
  border-radius: 50%;
}

</style>