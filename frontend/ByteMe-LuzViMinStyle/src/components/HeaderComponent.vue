<template>
  <header class="header">
    <a href="#" class="logo"
      ><img src="../assets/LuzViMinLogo.png" alt="LuzViMin logo" width="150px" height="auto"
    /></a>
    <nav class="navbar">
      <a href="#section1" style="--i: 1" class="nav-link">Home</a>
      <a href="#section2" style="--i: 2" class="nav-link">About Us</a>
      <a href="#section3" style="--i: 3" class="nav-link">Shop</a>
      <a href="#" style="--i: 4" class="hovercart"><i class="fa-solid fa-cart-shopping"></i></a>
      <!-- <a href="#" style="--i:4;" class="hovercart"><img src = "" ></a> -->
      <a href="#" style="--i: 5" class="nav-link"> <strong>Sign Up</strong></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
  // Your component's logic here
}
</script>

<style scoped>
.heading {
  text-align: center;
  font-size: 4.5rem;
}
.header {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 10%;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.logo {
  font-size: 10px;
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
  opacity: 0;
  animation: slideRight 1s ease forwards;
}
.navbar a {
  display: inline-block;
  font-size: 18px;
  color: #cc8f0c;
  text-decoration: none;
  font-weight: 500;
  margin-right: 85px;
  transition: 0.3s;
  opacity: 0;
  animation: slideTop 0.5s ease forwards;
  animation-delay: calc(0.2s * var(--i));
}
.navbar a:hover,
.navbar a.active {
  color: #74540f;
  font-weight: bold;
}
.nav-link.active {
  color: #74540f;
  font-weight: bold;
}
</style>
