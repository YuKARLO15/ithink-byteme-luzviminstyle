<template>
  <div class="loginform">
    <form @submit.prevent="login">
      <div class="username">
        <h4 class="h4_class">Welcome to <span>LuzViMin</span></h4>
        <label for="username"><b>Username</b></label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
      </div>
      <div class="pass">
        <label for="password"><b>Password</b></label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
      </div>

      <div class="check_box">
        <label class="remember">
          <input type="checkbox" v-model="remember" checked="checked" name="remember" />
          Remember me
        </label>
      </div>
      <div class="btnlogin">
        <button type="submit" id="LogIn">Login</button>
      </div>

      <div class="forgot">
        <span class="password" padd><a href="#">Forgot password?</a></span>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, child, get } from 'firebase/database'
import { db } from '@/firebase/firebaseInit' // Adjust the path as necessary

export default {
  data() {
    return {
      username: '',
      password: '',
      remember: false
    }
  },
  methods: {
    async login() {
      try {
        const userSnapshot = await get(child(ref(db), `users/${this.username}`))
        if (userSnapshot.exists()) {
          const userData = userSnapshot.val()
          if (this.password === userData.password) {
            alert('Login successful!')
            this.$router.push({ path: '/' }) // Use Vue Router for navigation
          } else {
            alert('Incorrect password. Please try again.')
          }
        } else {
          alert('Username not found. Please check your username.')
        }
      } catch (error) {
        console.error('Error logging in:', error)
        alert('Login failed. Please try again later.')
      }
    }
  }
}
</script>

<style scoped>
/*login div*/

/* Reset default browser styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Style for the form container */
.username {
  padding: 16px;
  background-color: #ffffff;
  margin-top: 5px;
}
.pass {
  padding: 16px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-bottom: 5px;
}
.loginform {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-top: 180px;
  padding-left: 1px;
  padding-right: 100px;
}

.containerbutton {
  padding: 16px;
  background-color: #ffffff;
  padding-top: 30px;
}

/* Style for form labels */
label {
  font-weight: normal;
  padding-left: 600px;
  padding-right: 40px;
}

.check_box {
  font-weight: bold;
  font-size: 14px;
  padding-left: 80px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-top: 1px;
}

.remember {
  padding-left: 666px;
}
/* Style for form inputs */
input[type='text'] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
input[type='password'] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Style for the login button */
button[type='submit'] {
  background-color: #cc8f0c;
  color: white;
  padding: 14px 20px;
  margin-left: 900px;
  cursor: pointer;
  width: 10%;
}

/* Change button color on hover */
button[type='submit']:hover {
  opacity: 0.8;
  margin-left: 900px;
}

/* Float cancel and password elements and add extra margin */
.cancelbtn {
  float: left;
  width: 20%;
  margin-top: 16px;
  padding-left: 180px;
  color: #fff;
}

.h4_class {
  margin-left: 600px;
  font-size: 40px;
  margin-bottom: 20px;
}

.h4_class span {
  color: #cb8d09;
  padding-top: 10px;
}
.psw {
  float: left;
  width: 20%;
  margin-top: 16px;
  padding-left: 80px;
}
/* Style for the cancel button */

.cancelbtn {
  background-color: #cb8d09;
  cursor: pointer;
  padding: 12px 10px;
}

.cancelbtn:hover {
  background-color: #d5ad55; /* Change to a darker shade or different color */
}

.cancel {
  padding-left: 560px;
}

.forgot {
  display: flex;
  justify-content: center;
  padding-bottom: 1px;
}

/* Add padding to the password link */
.psw a {
  padding-left: 12px;
  padding-top: 4px;
  size: 14px;
}

.psw a:hover {
  color: #4281c5; /* Hover color */
}

/* Clear floats after the cancel button */
.clearfix::after {
  content: '';
  clear: both;
  display: table;
}
</style>
