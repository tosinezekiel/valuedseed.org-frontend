<template>
    <div>
    <HomeNav />

    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-50">
      <div class="container">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">Login</h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" to="/">Home</router-link>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <li class="list-inline-item g-color-primary">
                <span>Login</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- Login -->
    <section class="container g-py-150">
      <div class="row justify-content-center">
        <div class="col-sm-8 col-lg-6">
          <div class="g-brd-around g-brd-gray-light-v4 rounded g-py-40 g-px-30">
            <header class="text-center mb-4">
              <h2 class="h2 g-color-black g-font-weight-600">Login</h2>
            </header>

            <!-- Form -->
            <form class="g-py-15">
              <div class="mb-4">
                <div class="input-group g-brd-primary--focus">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-finance-067 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    style="height:55px"
                  />
                </div>
              </div>

              <div class="g-mb-35">
                <div class="input-group g-brd-primary--focus mb-4">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-media-094 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="password"
                    placeholder="Password"
                    style="height:55px"
                  />
                </div>

                <div class="row justify-content-between">
                  <div class="col align-self-center">
                    <label class="form-check-inline u-check g-color-gray-dark-v5 g-font-size-12 g-pl-25 mb-0">
                      <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox" />
                      <div class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                        <i class="fa g-rounded-2" data-check-icon="#xf00c"></i>
                      </div>Keep signed in
                    </label>
                  </div>
                  <div class="col align-self-center text-right">
                    <router-link class="g-font-size-12" to="/password-reset">Forgot password?</router-link>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <button class="btn btn-md btn-block u-btn-primary g-py-13" type="button">Login</button>
              </div>
            </form>
            <!-- End Form -->

            <footer class="text-center">
              <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">
                Don't have an account?
                <router-link class="g-font-weight-600" to="/register">signup</router-link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Shop",
  components: {
    HomeNav, Footer
  }
};
</script> 
<style scoped>
/* Button Primary */
.u-btn-primary {
  color: #fff;
  background-color: #72c02c;
}

.u-btn-primary:hover, .u-btn-primary.active {
  border-color: #8cd54a;
  background-color: #8cd54a;
}

.u-btn-primary:hover, .u-btn-primary:focus, .u-btn-primary.active {
  color: #fff;
}

.u-btn-primary.g-btn-hover-reset:hover, .u-btn-primary.g-btn-hover-reset.active {
  background-color: #72c02c;
  border-color: #72c02c;
}

.u-btn-primary.u-btn-hover-v1-1 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-1::after, .u-btn-primary.u-btn-hover-v1-1:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v1-1:hover {
  background-color: #72c02c;
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-2 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-2::after, .u-btn-primary.u-btn-hover-v1-2:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v1-2:hover {
  background-color: #72c02c;
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-3 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-3::after, .u-btn-primary.u-btn-hover-v1-3:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v1-3:hover {
  background-color: #72c02c;
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-4 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v1-4::after, .u-btn-primary.u-btn-hover-v1-4:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v1-4:hover {
  background-color: #72c02c;
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v2-1 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v2-1::after, .u-btn-primary.u-btn-hover-v2-1:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v2-1:hover {
  background-color: #72c02c;
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v2-2 {
  overflow: hidden;
}

.u-btn-primary.u-btn-hover-v2-2::after, .u-btn-primary.u-btn-hover-v2-2:hover::after {
  background-color: #7fd135;
}

.u-btn-primary.u-btn-hover-v2-2:hover {
  background-color: #72c02c;
  overflow: hidden;
}

</style>