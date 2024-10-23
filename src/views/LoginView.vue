<template>
  <div :class="`${rtlClass} p-4 h-screen`">
      <div class="flex justify-start items-center">
          <CustomFlagDropDown/>
      </div>
     
  
      <div class="flex justify-center">
          <div class="flex flex-col m-10 w-full max-w-lg mx-auto  border-slate-200 border-2 rounded-2xl">
              <div class="flex justify-center mx-auto">
                <img  v-if="$i18n.locale === 'en'"  src="../assets/images/logoEngPrimary.png" alt="brandLogo" class="h-21 w-40" />
                <img  v-if="$i18n.locale === 'ar'"  src="../assets/images/logoArbPrimary.png" alt="brandLogo" class="h-21 w-40" />

              </div>

              <div class="mx-12 mb-6 flex justify-center">
                <h3 class="text-primary-dark text-5xl font-extrabold"> {{ $t('hellowelcome') }}</h3>
              </div>
              <div class="m-8">
                <label class="text-gray-800 text-lg block mb-2">{{ $t('email') }}</label>
                <div class="relative flex items-center">
                  <input v-model="email" name="email" type="text" required
                    id="loginEmailInput" class="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                    :placeholder="$t('enterEmail')" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" :class="[
                    'w-[18px]',
                    'h-[18px]',
                    'absolute',
                    this.$i18n.locale === 'ar' ? 'left-2' : 'right-2',
                    'cursor-pointer'
                  ]" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
              </div>
  
              <div class="m-8">
                <label class="text-gray-800 text-lg block mb-2">{{ $t('password') }}</label>
                <div class="relative flex items-center">
                  <input id="loginPasswordInput" v-model="password" name="password" :type="this.passwordVisibility ? 'text' : 'password'" required
                    class="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                    :placeholder="$t('enterPassword')" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" :class="[
                    'w-[18px]',
                    'h-[18px]',
                    'absolute',
                    this.$i18n.locale === 'ar' ? 'left-2' : 'right-2', // Conditional class
                    'cursor-pointer'
                  ]" viewBox="0 0 128 128" id="passwordVisibility" @click="togglePasswordVisibility">
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
  
              <div class="m-8">
                <button @click="verifyLogin" type="button"
                  id="loginButton" class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                  rounded-full text-white bg-button-primary hover:bg-button-hover 
                  focus:outline-none">
                  {{ $t('login') }}
                </button>
              </div>
          </div>
      </div>
  </div>
  </template>
  
  <script>
  import { mapState,mapActions } from 'vuex';
  import { Icon } from '@iconify/vue';
  import CustomFlagDropDown from '../components/CustomFlagDropDown.vue';
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
        passwordVisibility: false,
        selectedLanguage: this.$i18n.locale // Initialize with current locale
      }
    },
    components:{
      Icon,
      CustomFlagDropDown
    },
    computed: {
      rtlClass() {
        return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
      },
    },
    methods: {
      ...mapActions('login',['initiateLogin']),
      togglePasswordVisibility() {
        if (this.passwordVisibility) {
          this.passwordVisibility = false
        }
        else {
          this.passwordVisibility = true
        }
      },
      isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
      },
      isValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        return regex.test(password);
        // Valid Passwords: Must be between 8 and 20 characters long,
        // include at least one uppercase letter, one lowercase letter, one digit,
        // and one special character from the specified set.
      },
      async verifyLogin() {
        const verifyEmail = this.isValidEmail(this.email)
        const verifyPassword = this.isValidPassword(this.password)
        console.log(verifyEmail, verifyPassword, "verifyEmail", "verifyPassword")
        if (verifyEmail && verifyPassword) {
          const request = {
  
            "request": {
              "envelope": {
                "sourceApplication": "sourceApplication",
                "requestDate": "2021-01-06T11:58:10.775",
                "sourceRequestId": "sourceRequestId",
                "additionalSource1": "additionalSource1",
                "additionalSource2": "additionalSource2",
                "additionalReference1": "additionalReference1",
                "additionalReference2": "additionalReference2"
              },
              "content": {
                "bo_data": {
                  "type": "login",
                  "loginId": this.email,
                  "password": this.password,
                  "domain": "www.abc.com",
                  "channelTypeId": "2",
                  "gcmTokenId": "null"
                }
              }
            }
  
          }
          const response=this.initiateLogin(request);
  
          if(response)
          {
            this.$router.push({ name: 'home' });
          }
          else{
            console.log("User does not exist")
          }
        }
        else {
          console.log("credintials is not valid")
        }
  
      },
      // Change the language and update the locale in vue-i18n
      changeLanguage() {
        this.$i18n.locale = this.selectedLanguage
      }
    },
  
  }
  </script>
  
  <style scoped>
  /* RTL and LTR support */
  .rtl {
    direction: rtl;
  }
  
  .ltr {
    direction: ltr;
  }
  
  </style>