<template>
  
  <div class="container ">
    <div class="row my-4">
      <div class="col-12 col-lg-7">
         <h2>Hi,</h2>
         <h2>I'm Aysegul,</h2>
         <h2> a front-end developer </h2>
         <h2> and, industrial engineer.</h2>
      </div>
      <div class="col-12 col-lg-5 order-first order-lg-last">
        <img src="../assets/profile.png" class="img-fluid card-img" />
        <div class="social-icons">
          <a target="_blank"
href="https://www.linkedin.com/in/aysegulkaradan/"
              class="icons" >
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
            <a target="_blank"
href="mailto:hello@aysegulk.me"
              class="icons" >
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
            <a target="_blank"
href="https://github.com/karadanay7"
              class="icons" >
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          
         
       
      </div>
      </div>
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
    margin-right: 50px;
    cursor: pointer;
    color: white;
  margin-left: 33px;
  margin-top: 15px;
    
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

@media screen and (max-width: 992px) {
  h2 {
    font-size: 36px;
  }
  .card-img{ 
   min-height: 100px;
  }
}

</style>