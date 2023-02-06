<template>
  <div class="container ">
    <div class="row my-4">
      <div class="left-bar col-12 col-lg-6">
         <h2>Hi,</h2>
         <h2>I'm Aysegul,</h2>
         <h2> a front-end developer.</h2>
         <p class="my-4">I craft visually appealing and functional websites that enhance user experience.I'm a motivated junior web developer eager to bring my technical skills and innovative ideas to your next project. With a solid foundation in web development technologies and a passion for creating engaging websites, I'm ready to contribute to your team. Hire me to help build something amazing.</p>
      </div>
      <div class="right-bar col-12 col-lg-6">
        <img src="../assets/profile.png" class="img-fluid card-img" />
       
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


.container{
  padding-top: 100px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  background: url(../assets/triangles-1430105_1280.webp);
  background-size: cover;
  max-width: 1000cm;
  color: whitesmoke;
  letter-spacing: 3px;
}
.card-img{
  margin-left: 150px;
  object-fit: cover;
  max-height: 50vh;
  max-width: 50vh;
  border-radius: 50%;
  min-height: 100px;
  box-shadow: 0px 0px 70px rgba(0,0,0,.9);
  
}
h2{
  margin-left: 20px;
  font-size: 70px;
  font-family: 'Caveat', cursive;
  justify-content: left;
}
p{
  margin-left: 20px;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
}

</style>