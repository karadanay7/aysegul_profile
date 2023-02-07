<template>
  <div class="navbar-container">
    <nav class="container">
      <div class="row py-2 align-items-center">
        <div class="col-6">
          <router-link class="navbar-brand" to="/"> <img src="../assets/logo-no-background.png" class="rounded float-left" alt="Aysegul logo">AYSEGUL KARADAN</router-link>
        </div>
        <ul class="list-unstyled col-6 d-flex justify-content-end m-0">
          <li class="nav-item mx-4">
            <router-link class="text-nowrap custom-link-hover px-2 px-lg-5 " to="/AboutMe">About Me</router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="text-nowrap custom-link-hover px-2 px-lg-5 " to="/Projects">Projects</router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="text-nowrap custom-link-hover px-2 px-lg-5  " to="/Blog">Blog</router-link>
          </li>
        </ul>
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
  font-family: 'Roboto Condensed', sans-serif;
}

a {
  color: white;
  text-decoration: none;
  font-weight: semibold;
  
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
.custom-link-hover:hover, .custom-link-hover:focus {
    color: white;
}
img{
  width: 90px;
  height: 60px;
  border-radius: 50%;
}
@media screen and (max-width: 770px) {
  .navbar-brand{
    font-size: 12px;
   
  }
  .nav-item{
    margin-top: -3.5px;
    font-size: 14px; 
    
  }
 
}
</style>