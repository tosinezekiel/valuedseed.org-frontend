<template>
    <div>
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-50">
      <div class="container">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">Register</h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" to="/">Home</router-link>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <li class="list-inline-item g-color-primary">
                <span>Register</span>
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
              <h2 class="h2 g-color-black g-font-weight-600">Create New Account</h2>
            </header>

          <!--   <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
              </ul>
            </p> -->
            <div v-if="success.length">
              <span class="u-btn-primary g-py-13 btn p-5  g-px-15 mb-4 col-lg-12" v-for="(suces, index) in success" v-bind:key="index"> 
                <h5>Congratulations! {{suces}}</h5>
                Account Created Successfully. <br/> kindly login to continue
              </span>
            </div>
            <!-- Form -->
            <form class="g-py-15">
              <div class="mb-4">
                  <label>First Name</label>
                <div class="input-group g-brd-primary--focus">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-finance-067 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    v-model="first_name" class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="text"
                    placeholder="Name"
                    style="height:55px"
                  />
                </div>
              </div>
              <div class="mb-4">
                  <label>Last Name</label>
                <div class="input-group g-brd-primary--focus">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-finance-067 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    v-model="last_name" class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="text"
                    placeholder="Name"
                    style="height:55px"
                  />
                </div>
              </div>
              <div class="mb-4">
                  <label>Email Address </label>
                <div class="input-group g-brd-primary--focus">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-communication-062 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    v-model="email" class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    style="height:55px"
                  />
                </div>
              </div>

              <div class="g-mb-35">
                  <label>Password </label>
                <div class="input-group g-brd-primary--focus mb-4">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-media-094 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    v-model="password"  class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="password"
                    placeholder="Password"
                    style="height:55px"
                  />
                </div>
              </div>
              <div class="g-mb-35">
                  <label>Confirm Password </label>
                <div class="input-group g-brd-primary--focus mb-4">
                  <div class="input-group-prepend">
                    <span
                      class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-gray-dark-v5"
                    >
                      <i class="icon-media-094 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <input
                    v-model="password_confirmation" class="form-control g-color-black g-bg-white g-brd-gray-light-v4 g-py-15 g-px-15"
                    type="password"
                    placeholder="Confirm Password"
                    style="height:55px"
                  />
                </div>
              </div>

              <div class="mb-4">
                <button class="btn btn-md btn-block u-btn-primary g-py-13" v-on:click="register" type="button">Create</button>
              </div>
            </form>
            <!-- End Form -->

            <footer class="text-center">
              <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">
                Have an account?
                <router-link class="g-font-weight-600" to="/login">Login</router-link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      first_name:null,
      last_name:null,
      email:null,
      password:null,
      password_confirmation:null,
      errors: [],
      success: []
    }
  }, 
  methods: {
    
    register(e) {

      this.errors = [];
      this.success = [];

      if (!this.first_name) {
        this.errors.push('First name is required.');
      }
      if (!this.last_name) {
        this.errors.push('Last name is required.');
      }
      if (!this.email) {
        this.errors.push('Email address is required.');
      }
      if (!this.password) {
        this.errors.push('Password is required.');
      }
      if (!this.password_confirmation) {
        this.errors.push('Confirm your password.');
      }
       if (this.password != this.password_confirmation) {
        this.errors.push('Please confirm your correct password.');
        // return true;
      }

      for (const error in this.errors){
        return this.$noty.warning(this.errors[error]);
      }
      
      e.preventDefault();
      const formData = new FormData();
      formData.append('first_name', this.first_name);
      formData.append('last_name', this.last_name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('password_confirmation', this.password_confirmation);

      this.$http
        .post('api/register', formData)
        .then(response => {
            console.log(response);
            this.success.push('Congratulations! '+this.first_name+' '+this.last_name);
            this.first_name = null;
              this.last_name = null;
              this.email = null;
              this.password = null;
              this.password_confirmation = null;
              this.errors  =  []
          });
        },
      },
  components: {
  
  },
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