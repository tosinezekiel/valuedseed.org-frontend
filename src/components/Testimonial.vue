<template>
    <div>
        <section class="section-primary main-color b-bordered bg-block-top-shadow v2">
               <div class="container">
                  <div class="row text-center">

                     <div class="col-sm-12">

                        <h1 class="section-title">

                           What Others Say <span class="primary-color">About Us</span>
                        </h1>

                        <p class="section-sub-title">
                           Everyday More People Join The Ultimate Experience.
                        </p>

                        <div class="exp-separator center-separator mb-70">
                           <div class="exp-separator-inner">
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="row">

                     <Testimony />
                     <Testimony />
                     <Testimony />

                     
                  </div>
               </div>
            </section>
    </div>
</template>
<script>
import Testimony from "./innercomp/Testimony";
export default {
    name:'Testimonial',
    components:{
        Testimony
    }
}
</script>