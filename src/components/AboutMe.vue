<template>
  <div class="container-fluid">
    <div class="card-wrapper">
      <div class="card">
        <img src="../assets/gray.jpeg" class="card-img" />
        <h1 class="card-heading">AYSEGUL KARADAN</h1>

        <p class="card-paragraph">
          <font-awesome-icon icon="fa-solid fa-quote-left" />
          <span class="paragraph">Hi there! I'm Aysegul Karadan, a web developer with a background in industrial engineering. I bring a unique blend of technical skills and engineering knowledge to my work, creating dynamic and user-friendly websites that meet my clients' needs. I have a passion for innovation and a talent for problem-solving, and I'm always on the lookout for new and creative ways to use technology to drive progress and improve processes. In my spare time, I enjoy writing about engineering and technology, sharing my insights and knowledge through articles on various engineering blogs. If you're looking for a web developer who can bring both technical excellence and a deep understanding of the industry to your project, I'd love to hear from you! </span>
          <font-awesome-icon icon="fa-solid fa-quote-right" />
        </p>
        <ul class="card-icons">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aysegulkaradan/"
              class="card-icon-link"
            >
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="mailto:hello@aysegulk.me"
              class="card-icon-link"
            >
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </a>
          </li>
        </ul>
        <button
          onclick="window.open('https://github.com/karadanay7', '_blank')"
          class="card-btn"
        >
          View Profile
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
<style scoped>
.container-fluid {
  font-family: "Josefin Sans", sans-serif;

  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(../assets/pawel-czerwinski-95QNbCkVERM-unsplash.jpg) no-repeat center;
  position: relative;
  background-size: cover;
}


.card-wrapper {
  
  height: 600px;
  width: 1100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.navbar-container {
  background-color: lightpink;
}

.card-wrapper:hover {
  box-shadow: 0 0 30px #fff;
}
.card-wrapper:hover.card {
  opacity: 0;
}
.card {
  height: 600px;
  width: 1100px;
  background-color: transparent;
  position: absolute;
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: top 0.2s 0.6s;
}
.card-wrapper:hover .card {
  top: 0;
}
.card-img {
  height: 200px;
  width: 200px;
  border-radius: 20%;
  object-fit: cover;
  margin-top: 15px;
  border: 2px solid #fff;
  padding: 10px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.9);
}
.card-heading {
  font-family: "Source Code Pro", monospace;
  font-size: 25px;
  font-weight: 300;

  color: #fff;
  letter-spacing: 3px;
  background: radial-gradient(
    345px at 3.1% 89.3%,
    rgba(254, 223, 45, 0.46) 0%,
    rgba(254, 139, 45, 0.46) 31.9%,
    rgba(255, 24, 220, 0.46) 62%,
    rgba(24, 145, 255, 0.46) 85.8%
  );

  width: 60%;
  text-align: center;
  padding: 5px 0;
}
.card-paragraph {
  font-size: 18px;
  color: white;
  width: 85%;
  text-align: justify;
  position: relative;
}
.paragraph {
 
  margin-left: 20px;
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
}

.card-paragraph i {
  color: #fff;
  font-size: 25px;
  font-style: italic;
  position: absolute;
}

.card-icons {
  list-style: none;
  display: flex;
  width: 50%;
  padding-inline-start: 0;
  justify-content: space-evenly;
}
.card-icon-link {
  text-decoration: none;
  width: 35px;
  height: 35px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: border 3s;
}

.card-icon-link:hover {
  border: 1px solid rgb(119, 46, 122);
}
.card-icon {
  font-size: 20px;
  color: rgb(18, 40, 169);
  transition: color 3s;
}
.card-icon-link:hover .card-icon {
  color: rgb(119, 46, 122);
}
.card-btn {
  border: 2px solid #ddd;
  outline: none;
  width: 150px;
  height: 35px;
  margin-bottom: 20px;
  border-radius: 50px;
  background: linear-gradient(#dbdf8f, #d3603d);
  color: #0c2d48;
  font-weight: bold;
  transition: 1s;
  cursor: pointer;
  justify-content: center;
}
.card-btn:hover {
  color: rgb(255, 255, 255);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
</style>
