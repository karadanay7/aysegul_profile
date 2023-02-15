<template>
  
  <div class="container ">
    <div class="row ">
      <div class="profiletext col-12 col-lg-6">
         <h2>Hi,</h2>
         <h2>I'm Aysegul,</h2>
         <h2> a front-end developer </h2>
         <h2> and, industrial engineer.</h2>
      </div>
      <picture class=" profilepic col-12 col-lg-6 order-first order-lg-last">
        <img src="../assets/profile.png" class="img-fluid d-block m-auto card-img" />
        <div class="social-icons">
          <a target="_blank"
href="https://www.linkedin.com/in/aysegulkaradan/"
              class="icons mx-4" >
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a target="_blank"
href="mailto:hello@aysegulk.me"
              class="icons mx-4" >
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
            <a target="_blank"
href="https://github.com/karadanay7"
              class="icons mx-4" >
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          
         
       
      </div>
      </picture>
    </div>
  </div>    
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>
<style scoped>
.icons{
  font-size: 50px;
   
    cursor: pointer;
    color: white;
  justify-content: center;
 
    
}
.social-icons{
  text-align: center;
}
.row{
  margin: 0;
  padding: 0;
}
.container{
  padding: 100px 0 0 0;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  background: url(../assets/triangles-1430105_1280.webp);
  background-size: cover;
  max-width: 1000cm;
  color: whitesmoke;
  letter-spacing: 3px;
}
.profilepic{
  padding: 0;
margin: auto;
}
.card-img{
  object-fit: cover;
  max-height: 50vh;
  max-width: 50vh;
  border-radius: 50%;
  min-height: 200px;
  box-shadow: 0px 0px 70px rgba(0,0,0,.9);
  
}

h2{
 margin-left: 30px;
  font-size: 70px;
  font-family: 'Caveat', cursive;
  justify-content: left;
}

@media screen and (max-width: 994px) {
  h2 {
    font-size: 40px;
  }
  
  .icons{
    font-size: 30px;
    margin-left: 70px;
    margin-right: 5px;
  }
   .card-img{
   max-width: 200px;
    max-height: 200px;
   }
  
}

</style>