<template>
    <div>
    <!-- Breadcrumbs -->
    <section class="dzsparallaxer auto-init height-is-based-on-content mode-scroll loaded">
     <!--  <div class="divimage dzsparallaxer--target w-100 u-bg-overlay g-bg-black-opacity-0_3--after" style="height: 140%; background-image: url(assets/img-temp/1920x800/img3.jpg);">
      </div> -->
      <div class="container g-color-white text-center g-py-120">
        <h3 class="h1 g-font-weight-600 text-uppercase mb-2">Can You Teach?</h3>
        <p class="g-font-weight-300 g-font-size-22 text-uppercase">Unify is a clean and fully responsive theme</p>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- Login -->
    <section class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall" data-options="{direction: 'reverse', settings_mode_oneelement_max_offset: '150'}">
      <!-- Parallax Image -->
      <div class="divimage dzsparallaxer--target w-100 u-bg-overlay g-bg-size-cover g-bg-bluegray-opacity-0_3--after" style="height: 140%;background-image: url(assets/img/bt.png);"></div>
      <!-- End Parallax Image -->

      <div class="container g-pt-100 g-pb-20">
        <div class="row justify-content-between">
          <div class="col-md-6 col-lg-5 flex-md-unordered align-self-center g-mb-80">
            <div class="u-shadow-v21 g-bg-white rounded g-pa-50">
              <header class="text-center mb-4">
                <h2 class="h2 g-color-black g-font-weight-600">Become a Teacher</h2>
              </header>

              <!-- Form -->
              <form class="g-py-15" @submit="checkForm">
                <div class="mb-4">
                  <label for="country">First Name</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <input v-model="first_name" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15 has-error" type="text"
                  :class="{'cus-error':FirstNameErrors[0]}"
                  @input="$v.first_name.$touch()"
                  @blur="$v.first_name.$touch()"
                  />
                  <small :class="{'small-error':FirstNameErrors[0]}">{{FirstNameErrors[0]}}</small>
                </div>

                <div class="mb-4">
                  <label for="country">Last Name</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <input v-model="last_name" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="text" 
                  :class="{'cus-error':LastNameErrors[0]}"
                  @input="$v.last_name.$touch()"
                  @blur="$v.last_name.$touch()"
                  />
                  <small :class="{'small-error':LastNameErrors[0]}">{{LastNameErrors[0]}}</small>
                </div>
                <div class="mb-4">
                  <label for="country">Gender</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <select v-model="gender" class="form-control" 
                  :class="{'cus-error':GenderErrors[0]}"
                  @input="$v.gender.$touch()"
                  @blur="$v.gender.$touch()"
                  >
                    <option disabled selected>--Select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div class="mb-4">
                  <label for="country">Email</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <input v-model="email" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="email" 
                  :class="{'cus-error':EmailErrors[0]}"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  />
                  <small :class="{'small-error':EmailErrors[0]}">{{EmailErrors[0]}}</small>
                </div>

                <div class="g-mb-30">
                  <label for="country">Phone</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <input v-model="phone" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="tel" 
                  :class="{'cus-error':PhoneErrors[0]}"
                  @input="$v.phone.$touch()"
                  @blur="$v.phone.$touch()"
                  />
                  <small :class="{'small-error':PhoneErrors[0]}">{{PhoneErrors[0]}}</small>
                </div>

                <div class="g-mb-30">
                  <label for="country">Subject Interest</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <input v-model="subject" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="text" 
                  :class="{'cus-error':SubjectErrors[0]}"
                  @input="$v.subject.$touch()"
                  @blur="$v.subject.$touch()"
                  />
                  <small :class="{'small-error':SubjectErrors[0]}">{{SubjectErrors[0]}}</small>
                </div>

                <div class="g-mb-30">
                  <label for="country">State</label><span style="color: red !important; display: inline; float: none;">*</span>  
                  <!-- <input v-model="state" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="text"> -->
                  <select v-model="state" class="form-control" 
                  :class="{'cus-error':StateErrors[0]}"
                  @input="$v.state.$touch()"
                  @blur="$v.state.$touch()"
                  >
                        <option disabled selected>--Select State--</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross Rive">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT">Federal Capital Territory</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>
                     <small :class="{'small-error':StateErrors[0]}">{{StateErrors[0]}}</small>
                </div>

                <div class="g-mb-30">
                  <!-- <input v-model="country" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" type="text" placeholder="Country"> -->
                  <label for="country">Country</label><span style="color: red !important; display: inline; float: none;">*</span>      
        
                <select id="country" name="country" v-model="country" class="form-control" 
                :class="{'cus-error':CountryErrors[0]}"
                @input="$v.country.$touch()"
                @blur="$v.country.$touch()"
                >
                <option disabled selected>--Select Country--</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>

                <small :class="{'small-error':CountryErrors[0]}">{{CountryErrors[0]}}</small>
                </div>

                <div class="g-mb-30">
                  <textarea v-model="about" class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--hover rounded g-py-15 g-px-15" placeholder="About"
                  :class="{'cus-error':AboutErrors[0]}"
                  @input="$v.about.$touch()"
                  @blur="$v.about.$touch()"
                  ></textarea>
                  <small :class="{'small-error':AboutErrors[0]}">{{AboutErrors[0]}}</small>
                </div>

                <div class="text-center mb-5">
                  <button class="btn btn-block u-btn-primary rounded g-py-13" type="button" @click="checkForm">Apply</button>
                </div>
              </form>
              <!-- End Form -->

              <footer class="text-center">
                <p class="g-color-gray-dark-v5 mb-0">Already have an account? <a class="g-font-weight-600" href="page-login-8.html">signin</a>
                </p>
              </footer>
            </div>
          </div>

          <div class="col-md-6 flex-md-first align-self-center g-mb-80">
            <div class="mb-5">
              <h1 class="h3 g-color-white g-font-weight-600 mb-3">Profitable contracts,<br>invoices &amp; payments for the best cases!</h1>
              <p class="g-color-white-opacity-0_8 g-font-size-12 text-uppercase">Trusted by 31,000+ users globally</p>
            </div>

            <div class="row">
              <div class="col-md-11 col-lg-9">
                <!-- Icon Blocks -->
                <div class="media mb-4">
                  <div class="d-flex mr-4">
                    <span class="align-self-center u-icon-v1 u-icon-size--lg g-color-primary">
                      <i class="icon-finance-168 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <div class="media-body align-self-center">
                    <p class="g-color-white mb-0">Reliable contracts, multifanctionality &amp; best usage of Unify template</p>
                  </div>
                </div>
                <!-- End Icon Blocks -->

                <!-- Icon Blocks -->
                <div class="media mb-5">
                  <div class="d-flex mr-4">
                    <span class="align-self-center u-icon-v1 u-icon-size--lg g-color-primary">
                      <i class="icon-finance-193 u-line-icon-pro"></i>
                    </span>
                  </div>
                  <div class="media-body align-self-center">
                    <p class="g-color-white mb-0">Secure &amp; integrated options to create individual &amp; business websites</p>
                  </div>
                </div>
                <!-- End Icon Blocks -->

                <!-- Testimonials -->
                <blockquote class="u-blockquote-v1 g-color-main rounded g-pl-60 g-pr-30 g-py-25 g-mb-40">Look no further you came to the right place. Unify offers everything you have dreamed of in one package.</blockquote>
                <div class="media">
                  <img class="d-flex align-self-center rounded-circle g-width-40 g-height-40 mr-3" src="assets/img-temp/100x100/img12.jpg" alt="Image Description">
                  <div class="media-body align-self-center">
                    <h4 class="h6 g-color-primary g-font-weight-600 g-mb-0">Alex Pottorf</h4>
                    <em class="g-color-white g-font-style-normal g-font-size-12">Web Developer</em>
                  </div>
                </div>
                <!-- End Testimonials -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'
export default {
  name: "BeTeacher",
  data(){
    return {
      errors: [],
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      gender: null,
      subject: null,
      state: null,
      country: null,
      about: null
    }
  }, 
  computed:{
    FirstNameErrors () {
      const errors = []
      if (!this.$v.first_name.$dirty) return errors
      !this.$v.first_name.required && errors.push('first name is required.')
      !this.$v.first_name.maxLength && errors.push('first name must be at most 10 characters long')
      !this.$v.first_name.minLength && errors.push('first name must be at atleast 5 characters long')
      return errors
    },
    LastNameErrors () {
      const errors = []
      if (!this.$v.last_name.$dirty) return errors
      !this.$v.last_name.required && errors.push('last name is required.')
      !this.$v.first_name.maxLength && errors.push('last name must be at most 10 characters long')
      !this.$v.first_name.minLength && errors.push('last name must be at atleast 5 characters long')
      return errors
    },
    EmailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('email is required.')
      return errors
    },
    GenderErrors () {
      const errors = []
      if (!this.$v.gender.$dirty) return errors
      !this.$v.gender.required && errors.push('gender is required.')
      return errors
    },
    PhoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('phone no is required.')
      !this.$v.phone.maxLength && errors.push('phone no must be at most 11 characters long')
      return errors
    },
    SubjectErrors () {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push('subject is required.')
      !this.$v.subject.minLength && errors.push('subject must be at least 3 characters long')
      return errors
    },
    StateErrors () {
      const errors = []
      if (!this.$v.state.$dirty) return errors
      !this.$v.state.required && errors.push('state is required.')
      return errors
    },
    CountryErrors () {
      const errors = []
      if (!this.$v.country.$dirty) return errors
      !this.$v.country.required && errors.push('country is required.')
      return errors
    },
    AboutErrors () {
      const errors = []
      if (!this.$v.about.$dirty) return errors
      !this.$v.about.required && errors.push('about is required.')
      !this.$v.first_name.maxLength && errors.push('about must be at most 100 characters long')
      return errors
    }
  },
  validations:{
      first_name: { required, maxLength: maxLength(10), minLength: minLength(5) },
      last_name: { required, maxLength: maxLength(10), minLength: minLength(5) },
      email: { required, email },
      gender: { required },
      phone: { required, maxLength: maxLength(11) },
      subject: { required, minLength: minLength(3) },
      state: { required },
      country: { required },
      about: { required, maxLength: maxLength(100) }
  },
  methods:{
    checkForm: function (e) {
      let currentObj = this
       e.preventDefault();
       const formData = new FormData();
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('email', this.email);
        formData.append('phone', this.phone);
        formData.append('subject', this.subject);
        formData.append('state', this.state);
        formData.append('country', this.country);
        formData.append('about', this.about);
        formData.append('gender', this.gender);
        // formData.append('first_name', 'tosin');
        // formData.append('last_name', 'mikel');
        // formData.append('email', 'tosin@gmail.com');
        // formData.append('phone', '09089786756');
        // formData.append('subject', 'porotech');
        // formData.append('state', 'ekiti');
        // formData.append('country', 'nigeria');
        // formData.append('about','i love tech');
        // formData.append('gender', 'male');
      if (this.first_name && 
          this.last_name && 
          this.email &&
          this.phone &&
          this.subject &&
          this.gender &&
          this.state && 
          this.country && 
          this.about){
        this.$http.post('api/application',formData)
        .then(response => {
            this.$noty.success(response.data.message);
            this.first_name = null;
            this.last_name = null;
            this.email = null;
            this.phone = null;
            this.gender = null;
            this.subject = null;
            this.state = null;
            this.country = null;
            this.about = null;
          }).catch( function(error){
              const objkey = Object.keys(error.response.data.errors);
              const fisrtError = error.response.data.errors[objkey[0]][0];
              console.log(fisrtError);
              currentObj.$noty.error(fisrtError);
            });
        }else{
          this.$noty.warning("one or more field is empty");
        }
    }
  },
  components: {
  
  },
};
</script> 
<style scoped>
/* Button Primary */

.cus-error{
  border-color:red !important;
}
.small-error{
  color:red !important;
  margin-top:5px;
  margin-bottom:5px;
}
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