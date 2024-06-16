<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-row">
        <div class="footer-column">
          <h3>About Us</h3>
          <p>LuzViMin Styles Renting and Selling Gowns in the Philippines</p>
        </div>
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#section1"><b>Home</b></a>
            </li>
            <li>
              <a href="#section2"><b>About Us</b></a>
            </li>
            <li>
              <a href="#section3"><strong>Shop</strong></a>
            </li>
            <li>
              <a href="#"><b>Log In</b></a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Follow Me</h3>
          <div class="social-icons">
            <a href="#"><i class="bx bxl-facebook-circle"></i></a>
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-instagram"></i></a>
            <a href="#"><i class="bx bx-envelope"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; LuzViMin Styles.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
  // Your component's JavaScript code goes here
}
</script>

<style scoped>
.footer {
  background-color: #fff;
  color: black;
  padding: 40px 10%;
  grid-template-columns: repeat(1, 1fr);
  bottom: 0;
  width: 100%;
}

.footer-container {
  max-width: 13500px;
  margin: auto;
  margin-top: 60px;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
  margin: 20px;
  min-width: 250px;
}

.footer-column h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #cc8f0c;
}

.footer-column p,
.footer-column ul {
  font-size: 16px;
  line-height: 1.6;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
}

.footer-column ul li a {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #cc8f0c;
}

.social-icons {
  display: flex;
  justify-content: space-between;
  width: 160px;
}

.social-icons a {
  color: black;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #cc8f0c;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  margin-top: 20px;
}

.footer-bottom p {
  font-size: 14px;
  color: #726969;
}
</style>
