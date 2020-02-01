<template>
    <div>    <!-- Promo Block -->
    <section class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall " data-options='{direction: "fromtop", animation_duration: 25, direction: "reverse"}'>
      <!-- Parallax Image -->
      <div class="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-size-cover g-bg-pos-top-center g-bg-black-opacity-0_2--after" style="height: 140%; background-image: url(assets/img/contact.jpg);"></div>
      <!-- End Parallax Image -->

      <!-- Promo Block Content -->
      <div class="container g-color-white text-center g-pt-150 g-pb-200">
        <h3 class="h2 g-font-weight-300 mb-0">You came to the right place</h3>
        <h2 class="g-font-weight-700 g-font-size-80 text-uppercase">Let's Talk</h2>
      </div>
      <!-- Promo Block Content -->
    </section>
    <!-- End Promo Block -->

    <!-- Contact Form -->
    <section class="container">
      <!-- Icon Blocks -->
      <div class="row no-gutters u-shadow-v21 g-mt-minus-100">
        <div class="col-sm-6 col-md-4 g-brd-right--md g-brd-gray-light-v4">
          <!-- Icon Blocks -->
          <div class="g-bg-white text-center g-py-100">
            <span class="u-icon-v1 g-color-primary mb-3">
                <i style="font-size:72px" class="icon-real-estate-027 u-line-icon-pro"></i>
              </span>
            <h4 class="h3 g-font-weight-600 g-mb-5">Address</h4>
            <span class="d-block">44, Emily Akinola Street, Akoka Yaba</span>
          </div>
          <!-- End Icon Blocks -->
        </div>

        <div class="col-sm-6 col-md-4 g-hidden-xs-down g-brd-right--md g-brd-gray-light-v4">
          <!-- Icon Blocks -->
          <div class="g-bg-white text-center g-py-100">
            <span class="u-icon-v1 u-icon-size--xl g-color-primary mb-3">
                <i style="font-size:72px"  class="icon-communication-062 u-line-icon-pro"></i>
              </span>
            <h4 class="h3 g-font-weight-600 g-mb-5">Phone Number</h4>
            <span class="d-block">1-800-643-4500</span>
          </div>
          <!-- End Icon Blocks -->
        </div>

        <div class="col-sm-6 col-md-4 g-hidden-sm-down">
          <!-- Icon Blocks -->
          <div class="g-bg-white text-center g-py-100">
            <span class="u-icon-v1 u-icon-size--xl g-color-primary mb-3">
                <i style="font-size:72px"  class="icon-electronics-005 u-line-icon-pro"></i>
              </span>
            <h4 class="h3 g-font-weight-600 g-mb-5">Email</h4>
            <span class="d-block">support@valuedseed.org</span>
          </div>
          <!-- End Icon Blocks -->
        </div>
      </div>
      <!-- End Icon Blocks -->

      <div class="g-py-100">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h3 class="g-color-black g-font-weight-600 text-center mb-5">Who are you, and how can we help?</h3>
            <form @submit="sendRequest">
              <div class="row">
                <div class="col-md-6 form-group g-mb-20">
                  <label class="g-color-gray-dark-v2 g-font-size-13">Name</label>
                  <input v-model="name" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded-3 g-py-13 g-px-15"
                    style="height:55px" type="text" placeholder="John Doe">
                </div>

                <div class="col-md-6 form-group g-mb-20">
                  <label class="g-color-gray-dark-v2 g-font-size-13">Email</label>
                  <input v-model="email" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded-3 g-py-13 g-px-15" 
                    style="height:55px" type="email" placeholder="johndoe@gmail.com">
                </div>

                <div class="col-md-6 form-group g-mb-20">
                  <label class="g-color-gray-dark-v2 g-font-size-13">Subject</label>
                  <input v-model="subject" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded-3 g-py-13 g-px-15" 
                    style="height:55px" type="text" placeholder="Subject">
                </div>

                <div class="col-md-6 form-group g-mb-20">
                  <label class="g-color-gray-dark-v2 g-font-size-13">Phone</label>
                  <input v-model="phone" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded-3 g-py-13 g-px-15" 
                    style="height:55px" type="text" placeholder="0803 000 5674">
                </div>

                <div class="col-md-12 form-group g-mb-40">
                  <label class="g-color-gray-dark-v2 g-font-size-13">Message</label>
                  <textarea v-model="message" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover g-resize-none rounded-3 g-py-13 g-px-15" rows="7" placeholder="Hi there, I would like to ..."></textarea>
                </div>
              </div>

              <div class="text-center">
                <button class="btn u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase g-rounded-25 g-py-15 g-px-30" type="submit" role="button" @click="sendRequest">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Form -->


  </div>
</template>

<script>
export default {
  name: "Contact",
   data(){
    return {
      name:null,
      phone:null,
      email:null,
      subject:null,
      message:null,
      errors: [],
      success: []
    }
  }, 
  methods: {
    sendRequest: function (e) {
       e.preventDefault();

      this.errors = [];
      this.success = [];

     

      if (!this.name) {
        this.errors.push('Contact name is required');
      }
      if (!this.email) {
        this.errors.push('Contact email is required');
      }
      if (!this.subject) {
        this.errors.push('subject is required');
      }
      if (!this.phone) {
        this.errors.push('Contact phone is required');
      }
      if (!this.message) {
        this.errors.push('Message body is required');
      }

       for (const error in this.errors){
        return this.$noty.warning(this.errors[error]);
      }
       const formData = new FormData(); 
        formData.append('name', this.name);
        formData.append('subject', this.subject);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('message', this.message);
        this.$http.post('http://api.valuedseed.org/api/contact',formData)
        .then(response => {
            console.log(response)
            this.$noty.success(response.data.data.message);
          })
        .catch(error => {
          const reply = Object.keys(error.response.data.errors);
          const message = error.response.data.errors[reply];
             this.$noty.error(message);
          });
    }
  },
  components: {
    
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