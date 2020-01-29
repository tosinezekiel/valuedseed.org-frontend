<template>
  <div>
    <nav class="collapse js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
      <ul class="nav nav-pills" id="mainNav">
        <li>
          <a href="/">Home</a>          
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="http://shop.valuedseed.org">Shop</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/contact">Contact Us </a>
        </li>

        <li v-if="$store.getters.isAuth">
          <a href="http://shop.valuedseed.org/dashboard">Dashboard</a>
        </li>

        <li v-if="!$store.getters.isAuth" class="hs-has-sub-menu nav-item  g-mx-10--lg g-mx-15--xl hs-sub-menu-opened" data-animation-in="fadeIn" data-animation-out="fadeOut" @mouseover="subshow = true">
          <a  id="nav-link-pages" class="nav-link g-py-7 g-px-0" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu-pages">Inquiry</a>
          <ul class="hs-sub-menu list-unstyled u-shadow-v11 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-18 g-mt-8--lg--scrolling" id="nav-submenu-pages" aria-labelledby="nav-link-pages" :class="{'cus_reveal':subshow }" @mouseover="subshow = true" @mouseout="subshow = false">
          <li class="dropdown-item"><a class="nav-link" href="/become-a-teacher">Become a Teacher</a></li>
          </ul>
        </li>
       
        <li v-if="!$store.getters.isAuth" >
          <a href="/login">Login</a>
        </li>
        <li v-if="$store.getters.isAuth">
          <a href="/logout">Logout</a> 
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