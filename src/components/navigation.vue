<template>
  <div>
    <nav class="collapse">
      <ul class="nav nav-pills" id="mainNav">
        <li>
          <router-link to="/">Home</router-link>          
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>

        <li>
          <router-link to="/services">Services</router-link>
        </li>
        <li>
          <router-link to="/shop">Shop</router-link>
        </li>
        <li>
          <router-link to="/faq">FAQ</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact Us</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>