<template>
    <div>    

    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5">
      <div class="container g-py-50">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">FAQ</h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" to="/">Home</router-link>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <li class="list-inline-item g-color-primary">
                <span>FAQ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- Promo Block -->
    <section class="container text-center g-pt-120 g-pb-30">
      <h2 class="g-color-black g-font-weight-600 g-font-size-50 g-mb-70">Frequently Asked Questions</h2>
      <ul class="list-inline mb-0">
        <li class="list-inline-item g-brd-right g-brd-gray-light-v4 px-4 mx-0" v-for="(cat, index) in category" v-bind:key="index">
          <a class="js-go-to g-color-gray-dark-v5 g-font-weight-600 text-uppercase g-text-underline--none--hover" href="#" :data-target="'#'+cat">
              {{cat}}
            </a>
        </li>
       
      </ul>
    </section>
    <!-- End Promo Block -->
    <!-- Accordion -->
    <section class="container g-pb-100">
      <!-- Accordion -->
      <div :id="faq.name" class="u-shadow-v11 rounded g-py-100 g-mb-100" v-for="(faq, index) in faqs" v-bind:key="index">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- Heading -->
            <div class="text-center g-mb-60">
              <h2 class="g-font-weight-600 text-uppercase mb-2">{{faq.name}}</h2>
            </div>
            <!-- End Heading -->

            <div id="accordion" class="u-accordion u-accordion-color-primary" role="tablist" aria-multiselectable="true">
              <!-- Card -->
              <div class="card g-brd-none rounded-0 g-mb-20" v-for="(fq, index) in faq.faqs" v-bind:key="index">
                <div id="accordion-heading-01" class="g-brd-bottom g-brd-gray-light-v4 g-pa-0" role="tab">
                  <h5 class="mb-0">
                      <a class="collapsed d-flex justify-content-between g-color-main g-text-underline--none--hover rounded-0 g-px-30 g-py-20" :href="'#faq_'+fq.id" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" :aria-controls="'faq_'+fq.id">
                        {{fq.question}}
                        <span class="u-accordion__control-icon">
                          <i class="fa fa-angle-down"></i>
                          <i class="fa fa-angle-up"></i>
                        </span>
                      </a>
                    </h5>
                </div>
        <div :id="'faq_'+fq.id" class="collapse" role="tabpanel" aria-labelledby="accordion-heading-01" data-parent="#accordion">
                  <div class="u-accordion__body g-color-gray-dark-v4 g-pa-30">
                    {{fq.answer}}
                  </div>
                </div>
              </div>
              <!-- End Card -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Accordion -->
    </section>
   
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data(){
    return {
      faqs: [],
      category: [],
    }
  },
  components: {
  },
  methods:{
    init(){
      let jil = this;
      this.$http.get('http://api.valuedseed.org/api/faq')
      .then(response => {
        const log = response.data.data;
        // console.log(log);
        log.forEach(function (item){
          jil.category.push(item['name']);
          jil.faqs.push(item);

        });
          })

    }
  },
  mounted(){
    this.init()
  }
};
</script> 
<style scoped>
.u-accordion__header {
  padding: 0.71429rem 1.07143rem;
}

.u-accordion__body {
  padding: 1.07143rem;
}

.u-accordion__control-icon i:nth-child(1) {
  display: none;
}

.collapsed .u-accordion__control-icon i:nth-child(1) {
  display: inline;
}

.u-accordion__control-icon i:nth-child(2) {
  display: inline;
}

.collapsed .u-accordion__control-icon i:nth-child(2) {
  display: none;
}

[aria-expanded="false"] .u-accordion__control-icon i:nth-child(1) {
  display: inline;
}

[aria-expanded="false"] .u-accordion__control-icon i:nth-child(2) {
  display: none;
}

[aria-expanded="true"] .u-accordion__control-icon i:nth-child(1) {
  display: none;
}

[aria-expanded="true"] .u-accordion__control-icon i:nth-child(2) {
  display: inline;
}

.u-accordion [class*="et-icon-"], .u-accordion-line-icon-pro {
  position: relative;
  top: 3px;
}

.u-accordion-color-primary .u-accordion__header [aria-expanded="true"] {
  color: #72c02c !important;
}

.u-accordion-color-white .u-accordion__header [aria-expanded="true"] {
  color: #fff !important;
}

.u-accordion-bg-primary .u-accordion__header [aria-expanded="true"] {
  background-color: #72c02c !important;
  border-color: #72c02c !important;
}

.u-accordion-bg-white .u-accordion__header [aria-expanded="true"] {
  background-color: #fff !important;
  border-color: #fff !important;
}

.u-accordion-brd-primary .u-accordion__header [aria-expanded="true"] {
  border-color: #72c02c !important;
}

.u-accordion-brd-white .u-accordion__header [aria-expanded="true"] {
  border-color: #fff !important;
}

</style>