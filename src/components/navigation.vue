<template>
  <div>
    <nav class="collapse js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
      <ul class="nav nav-pills" id="mainNav">
        <li>
          <router-link to="/">Home</router-link>          
        </li>
        <li>
          <router-link to="/about">About</router-link>
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
        <li class="hs-has-sub-menu nav-item  g-mx-10--lg g-mx-15--xl hs-sub-menu-opened" data-animation-in="fadeIn" data-animation-out="fadeOut" @mouseover="subshow = true">
          <a  id="nav-link-pages" class="nav-link g-py-7 g-px-0" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu-pages">Inquiry</a>
          <ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling" id="nav-submenu-pages" aria-labelledby="nav-link-pages" :class="{'cus_reveal':subshow }" @mouseover="subshow = true" @mouseout="subshow = false">
          <li class="dropdown-item hs-has-sub-menu"><a class="nav-link" to="/">Ticket</a></li>
          <li class="dropdown-item"><a class="nav-link" href="/become-a-teacher">Become a Teacher</a></li>
          </ul>
        </li>
       
        <li>
          <router-link to="/login">Login</router-link>
        </li>
         
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return {
      subshow:false
    }
  }
};
</script>
<style scoped>
 .cus_reveal{
    display:block;
 } 

</style>