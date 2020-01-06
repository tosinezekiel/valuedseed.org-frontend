<template>
  <header
    id="header"
    class="header-narrow header-transparent"
    data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '1'}"
  >
    <div class="header-body">
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <div class="header-logo">
                <router-link to="/">
                  <img alt="ValuedSeed" width="120" height="80" src="assets/img/logo.png" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end">
            <div class="header-row">
              <div class="header-nav header-nav-top-line">
                <div class="header-nav-main header-nav-main-effect-2 header-nav-main-sub-effect-1">
                  <navUl />
                </div>
                <ul class="header-social-icons social-icons d-none d-sm-block">
                  <li class="social-icons-facebook">
                    <a href="http://www.facebook.com/" target="_blank" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="social-icons-twitter">
                    <a href="http://www.twitter.com/" target="_blank" title="Twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="social-icons-linkedin">
                    <a href="http://www.linkedin.com/" target="_blank" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <button
                  class="btn header-btn-collapse-nav"
                  data-toggle="collapse"
                  data-target=".header-nav-main nav"
                >
                  <i class="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

import navUl from "../components/navigation.vue";
export default {
  name: "HomeNav",
  components:{
    navUl,
  }
};
</script>

