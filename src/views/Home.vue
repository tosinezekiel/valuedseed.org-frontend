<template>
    <div class="wrapper">
      <div class="page">
         <HomeNav></HomeNav>
        <Revslider></Revslider>
        <div class="page-inner p-none no-border">
          <WelcomeSection></WelcomeSection>
          <CoreFeatures></CoreFeatures>
          <MessageTwo></MessageTwo>
          <FeatureProducts></FeatureProducts>
          <Udiscover></Udiscover>
          <SchoolSupport></SchoolSupport>
          <Testimonial></Testimonial>
          <PurchaseAction></PurchaseAction>
        </div>
        <Footer></Footer>
      </div>
    </div>
</template>
<!-- Vendor -->
<script>
import HomeNav from "../components/HomeNav.vue";
import Revslider from "../components/Revslider.vue";
import WelcomeSection from "../components/WelcomeSection.vue";
import CoreFeatures from "../components/CoreFeatures.vue";
import MessageTwo from "../components/MessageTwo.vue";
import PurchaseAction from "../components/PurchaseAction.vue";
import SchoolSupport from "../components/SchoolSupport.vue";
import Udiscover from "../components/Udiscover.vue";
import Testimonial from "../components/Testimonial.vue";
import FeatureProducts from "../components/FeatureProducts.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    HomeNav,
    Revslider,
    WelcomeSection,
    CoreFeatures,
    MessageTwo,
    FeatureProducts,
    Udiscover,
    SchoolSupport,
    Testimonial,
    PurchaseAction,
    Footer
  }
};
</script>

<style scoped>
#slider,
#rev_slider_6_1 {
  height: 100vh;
}

.ms-fullscreen-template {
  min-height: 250px;
}

.master-slider {
  height: 100%;
  font-family: Lato, arial, sans-serif;
}

.demos-filter {
  margin: 0;
  text-align: right;
}

.demos-filter li {
  list-style: none;
  margin: 10px 0px;
}

.demos-filter li a {
  display: block;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #444;
}

.demos-filter li a:hover,
.demos-filter li.activeFilter a {
  color: #1abc9c;
}

@media (max-width: 991px) {
  .demos-filter {
    text-align: center;
  }

  .demos-filter li {
    float: left;
    width: 33.3%;
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .demos-filter li {
    width: 50%;
  }
}
</style>
