<template>
  <div class="signup-form">
    <h2 class="h2_class">Sign Up <span>LuzViMin</span></h2>

    <form @submit.prevent="signUp" id="UserInformation">
      <div class="form-group">
        <label for="EnterUsername">Username</label>
        <input
          type="text"
          v-model="user.username"
          id="EnterUsername"
          placeholder="Enter your username"
          required
        />
      </div>

      <div class="form-group">
        <label for="EnterPassword">Password</label>
        <input
          type="password"
          v-model="user.password"
          id="EnterPassword"
          placeholder="Enter your password"
          required
        />
      </div>

      <div class="form-group">
        <label for="EnterFullName">Full Name</label>
        <input
          type="text"
          v-model="user.fullName"
          id="EnterFullName"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="form-group">
        <label for="EnterAge">Age</label>
        <input
          type="number"
          v-model="user.age"
          id="EnterAge"
          placeholder="Enter your age"
          required
        />
      </div>

      <div class="form-group">
        <label for="EnterEmail">Email</label>
        <input
          type="email"
          v-model="user.email"
          id="EnterEmail"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div class="form-group">
        <label for="EnterAddress">Address</label>
        <input
          type="text"
          v-model="user.address"
          id="EnterAddress"
          placeholder="Enter your address"
          required
        />
      </div>

      <button type="submit" id="SignUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref, set, get, getDatabase } from 'firebase/database'

export default {
  name: 'SignupComponent',
  data() {
    return {
      user: {
        username: '',
        password: '',
        fullName: '',
        age: '',
        email: '',
        address: ''
      }
    }
  },
  methods: {
    signUp() {
      const db = getDatabase()
      const userRef = ref(db, 'users/' + this.user.username)
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            alert('Username already exists. Please choose a different username.')
          } else {
            set(ref(db, 'users/' + this.user.username), this.user)
              .then(() => {
                alert('Signup Successful!')
                this.$router.push('/')
              })
              .catch((error) => {
                console.error('Error adding document: ', error)
                alert('Signup Failed. Please try again later.')
              })
          }
        })
        .catch((error) => {
          console.error('Error checking username:', error)
          alert('An error occurred. Please try again later.')
        })
    }
  }
}
</script>

<style scoped>
.signup-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-top: 180px;
  padding-left: 500px;
  padding-right: 500px;
}

.signup-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.h2_class span {
  color: #cb8d09;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #cc8f0c;
}

.form-group input[type='text'],
.form-group input[type='password'],
.form-group input[type='email'],
.form-group input[type='address'],
.form-group textarea,
.form-group input[type='number'] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical; /* Allow vertical resizing of textarea */
}

button[type='submit'] {
  width: 30%;
  padding: 10px;
  margin-left: 480px;
  background-color: #a87812;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type='submit']:hover {
  background-color: #b08c3e;
}
</style>
