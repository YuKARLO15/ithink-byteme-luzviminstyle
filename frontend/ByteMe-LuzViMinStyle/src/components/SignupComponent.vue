<template>
  <div class="signup-form">
    <h2>Sign Up LuzViMin</h2>
    <form action="#" method="post">
      <div class="form-group">
        <label for="what-they-want">What do you want?</label>
        <select id="what-they-want" name="what-they-want" required>
          <option value="">Select an option</option>
          <option value="Register for an account">Register for an account</option>
          <option value="Sign up for updates">Sign up for updates</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter your last name"
          required
        />
      </div>
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter your first name"
          required
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="address"
          id="address"
          name="address"
          placeholder="Enter your address"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupComponent'
  // Your component logic goes here
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
  width: 100%;
  padding: 10px;
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
