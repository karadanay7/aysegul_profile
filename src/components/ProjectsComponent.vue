<template>
 
  <div class="container">
    
  <div class="card">
  <h2 class="project-name">Holiday Towns of Izmir</h2>
  <img src="../assets/holiday.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/holidaytownsofizmirslideshow/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/holidaytownsofizmirslideshow" class="btn btn-link">Code</a>
  </div>
</div>

  <div class="card">
  <h2 class="project-name">Profile Cards</h2>
  <img src="../assets/profilecards.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/profilecards/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/profilecards" class="btn btn-link">Code</a>
  </div>
</div>
  <div class="card">
  <h2 class="project-name">Hamburger Menu</h2>
  <img src="../assets/hamburgermenu.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/hamburgermenu/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/hamburgermenu" class="btn btn-link">Code</a>
  </div>
</div>
  <div class="card">
  <h2 class="project-name">Tell me a joke!!!</h2>
  <img src="../assets/tellmeajoke.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/joke-teller-robot/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/joke-teller-robot" class="btn btn-link">Code</a>
  </div>
</div>
  <div class="card">
  <h2 class="project-name">Infinite Scroll</h2>
  <img src="../assets/infinityscroll.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/Achitecture-Designs-Scroll/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/Achitecture-Designs-Scroll" class="btn btn-link">Code</a>
  </div>
</div>
  <div class="card">
  <h2 class="project-name">Dark Mode</h2>
  <img src="../assets/darkmode.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/darkmode/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/darkmode" class="btn btn-link">Code</a>
  </div>
</div>
  <div class="card">
  <h2 class="project-name">Subscription Page</h2>
  <img src="../assets/subsciptionpage.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/subscriptionpage/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/subscriptionpage" class="btn btn-link">Code</a>
  </div>
</div>
<div class="card">
  <h2 class="project-name">Quote Generator</h2>
  <img src="../assets/quotegenerator.png" alt="Project Image" class="project-image">
  <div class="project-actions">
    <a href="https://karadanay7.github.io/quotegenerator/" class="btn btn-view">View</a>
    <a href="https://github.com/karadanay7/quotegenerator" class="btn btn-link">Code</a>
  </div>
</div>


</div>
   
</template>
<script>
export default {
  name: "ProjectsComponent",
};
</script>
<style scoped>
.container {
  font-family: 'Roboto Condensed', sans-serif;
  height: 100vh;
  width: 100vw;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    background: url(../assets/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background.jpg);
    background-size: cover;
    position: relative;
  }
  
  .card {
margin-top: 100px;
margin-bottom: 70px;
    width: 100%;
    height: 100%;
    
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 10px lightgray;
    background-color:rgba(49, 139, 171, 0.531);
    
  }
  .project-actions {
  display: flex;
  justify-content: space-around;
  
}

  
  h2 {
    font-size: 45px;
   
    color: aliceblue;
    text-shadow: 3px 3px 20px #ff99cc,
    -2px 1px 30px #ff99cc;
  }
  
  img {
   height: 110%;
   width: 100%;
    object-fit: cover;
  }
 
  
  a {
    margin-bottom: 50px;
    margin-left: 10px;
    font-weight: semibold;
    display: flex;
    justify-content: space-around;
   letter-spacing: 2px;
    padding: 10px ;
    background-color:transparent;
    color: white;
    margin-top: 2%;
    text-decoration: none;
   text-transform: uppercase;
    cursor: pointer;
    border: 2px solid  #e642aa;
  
  }
  a:hover{
    color: white;
    transform: scale(1.1);
    border: 2px solid  #e642aa;
  }
  .btn {
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
}

.btn-view {
  background-color: transparent;
}

.btn-link {
  background-color: transparent;
}
  
@media (min-width: 992px){
.container-lg, .container-md, .container-sm, .container {
    max-width: 1600px;
}
}
  
@media (max-width: 992px){
.container-lg, .container-md, .container-sm, .container {
    max-width: 1000px;
}
}
</style>