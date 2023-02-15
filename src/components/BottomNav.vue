<template>
  
  <div class="navbar-cik">
      <nav class="navbar   navbar-expand-md ">
        <div class="d-flex align-items-center"><img src="../assets/logo-no-background.png" class="rounded float-left" alt="Aysegul logo">
      <p class="motto">Empowering User Experience through Code Craftsmanship.</p>
      <p class="logomaker ">“Created my free logo at LogoMakr.com“</p>
      </div>
      
   
      </nav>
    </div>
  </template>
  
 <script>
 export default {
  name: "BottomNav",
};
 </script>
 <style scoped>
 .navbar-cik{
  width: 100vw;
  bottom: 0;
  left: 0;
  position: fixed;
  padding: 0;
 }
img{
  width: 90px;
  height: 60px;
  border-radius: 50%;
}
p{
  margin-top: 16px;
  color: white;
}
.logomaker{
  font-size: 8px;
  position: fixed;
  right: 0;
  bottom: 0;
}

@media screen and (max-width: 650px) {

  img{
  width: 60px;
  height: 40px;
  border-radius: 50%;
}
 .motto{
  font-size:10px ;
 }
 .logomaker{
  font-size: 4px;
 }
}

</style>