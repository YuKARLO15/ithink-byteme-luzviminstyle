<template>
    <header class="header">
      <a href="#" class="logo"
        ><img
          src="../assets/LuzViMinLogo.png"
          alt="LuzViMin logo"
          width="150px"
          height="auto"
      /></a>
      <nav class="navbar">
        <a href="message.html" style="--i: 4" class="hovercart"
          ><i class="fa-solid fa-message"></i
        ></a>
        <a href="userorder.html" style="--i: 4" class="hovercart"
          ><i class="fa-solid fa-cart-shopping"></i
        ></a>
        <div class="dropdown">
          <details>
            <summary>
              <i class="fa-solid fa-user" style="cursor: pointer"></i>
            </summary>
            <div class="dropdown-menu">
              <a href="edit_profile.html">View Profile</a>
              <a href="index.html">Log Out</a>
            </div>
          </details>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    name: 'ShopHeaderComponent',
    // Your component's JavaScript logic goes here
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

.shop nav {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}
.shop nav a:link {
  color: lightslategray;
}
.shop nav a:visited {
  color: lightslategray;
}
.shop nav a:hover {
  color: rosybrown;
}

/* Style for the dropdown container */
.dropdown {
  position: relative;
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

/* Hide the dropdown menu initially */
.dropdown-menu {
  display: none;
  position:absolute;
  top: 100%; /* Position it below the toggle */
  left: 0;
  right: 0;
  background-color: white;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
}

/* Style for links inside the dropdown menu */
.dropdown-menu a {
  color: #cc8f0c;
  padding: 12px 16px;
  margin: 0;
  text-decoration: none;
  display: block;
}

/* Change background on hover */
.dropdown-menu a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu when the details element is open */
details[open] .dropdown-menu {
  display: block;
}
</style>