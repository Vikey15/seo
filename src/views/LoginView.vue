<template>
  <div :class="`${rtlClass} p-4 h-screen space-y-10`">
    <div class="flex justify-start items-center">
      <CustomFlagDropDown />
    </div>


    <div class="flex justify-center">
      <div class="flex flex-col w-full max-w-lg   border-gray-300 border-2 rounded-2xl shadow-xl">
        <div class="flex justify-center mx-auto">
          <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
            class="h-32 w-32" />
          <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
            class="h-32 w-32" />

        </div>

        <div class="mx-auto flex justify-center">
          <h3 class=" text-gray-600 dark:text-gray-400 text-lg "> {{ $t('enterUsernameAndPass') }}</h3>
        </div>
        <div class="mx-8 mt-3">
          <label class="text-gray-800 text-lg block">{{ $t('email') }}</label>
          <div class="relative flex items-center">
            <input v-model="email" name="email" type="text" required :id="LoginPageIds.emailInput"
              class="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
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

        <div class="mx-8 mt-3">
          <label class="text-gray-800 text-lg block">{{ $t('password') }}</label>
          <div class="relative flex items-center">
            <input :id='LoginPageIds.passwordInput' v-model="password" name="password"
              :type="this.passwordVisibility ? 'text' : 'password'" required
              class="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
              :placeholder="$t('enterPassword')" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" :class="[
              'w-[18px]',
              'h-[18px]',
              'absolute',
              this.$i18n.locale === 'ar' ? 'left-2' : 'right-2', // Conditional class
              'cursor-pointer'
            ]" viewBox="0 0 128 128" :id='LoginPageIds.passwordVisibility' @click="togglePasswordVisibility">
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"></path>
            </svg>
          </div>
        </div>

        <div :class="[ 'flex', 'justify-around','items-center','mt-2']">
          <div class="flex justify-between">
            <input type="checkbox" class="accent-primary-dark" v-model="isChecked"/>
            <label class="text-gray-800 text-lg block ml-2"
            @click="isChecked = !isChecked"> {{ $t('rememberMe') }}</label>
          </div>
          <label class="text-gray-800 hover:underline decoration-2 text-lg block cursor-pointer"
            @click="this.$router.replace({ name: 'forgotPassword' });"> {{ $t('forgotPassword') }}</label>
        </div>
        <div class="mx-8 my-5">
          <button @click="verifyLogin" type="button" :id='LoginPageIds.loginButton' class="w-full py-3 px-6 text-xl font-bold tracking-wider 
                  rounded-full text-white bg-button-dark hover:bg-button-darkHover
                  focus:outline-none">
            {{ $t('login') }}
          </button>
        </div>
      </div>
    </div>

    <AlertModal :show="alertvisibility" :message="alertMessage" :description="alertDescription"
      :severity="alertSeverity" />
  </div>
</template>

<script>
import { LoginPageIds } from '../automationTestingIds';
import { mapState, mapActions, mapGetters } from 'vuex';
import { Icon } from '@iconify/vue';
import CustomFlagDropDown from '../components/CustomFlagDropDown.vue';
import AlertModal from '../components/modals/AlertModal.vue';
import { LOGIN_RESPONSE_SUCCESS_CODE } from '../constants';
import { vModelCheckbox } from 'vue';
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      passwordVisibility: false,
      isChecked: false,
      selectedLanguage: this.$i18n.locale, // Initialize with current locale
      LoginPageIds,
      alertvisibility: false,
      alertMessage: "",
      alertDescription: "",
      alertSeverity: ""

    }
  },
  components: {
    Icon,
    CustomFlagDropDown,
    AlertModal
  },
  computed: {
    rtlClass() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
    },
  },
  methods: {
    ...mapActions('login', ['initiateLogin']),
    ...mapGetters('login', ['loginResponse']),
    showAlert() {
      this.visible = true; 
      setTimeout(() => {
        this.visible = false; 
      }, 3000);
    },
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
      if(!verifyEmail)
    {
      this.alertvisibility = true,
          this.alertMessage = this.$t('error');
          this.alertDescription = this.$t('enterValidEmail');
          this.alertSeverity = "error",
          setTimeout(() => {
            this.alertvisibility = false;
          }, 2000);
    }
    // else if(!verifyPassword)
    // {
    //   this.alertvisibility = true,
    //       this.alertMessage = this.$t('error');
    //       this.alertDescription = this.$t('enterValidPassword');
    //       this.alertSeverity = "error",
    //       setTimeout(() => {
    //         this.alertvisibility = false;
    //       }, 2000);
    // }
      else if (verifyEmail ) {
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
        const response = await this.initiateLogin(request);
        this.$router.replace({ name: 'products' });
        // if (response.header.responseCode === LOGIN_RESPONSE_SUCCESS_CODE) {
        //   // document.cookie = `sessionToken=${response.data.token}; path=/; SameSite=Strict;`;
        //   this.$router.replace({ name: 'home' });
        // }
        // else{
        //   this.alertvisibility = true,
        //   this.alertMessage = this.$t('error');
        //   this.alertDescription = this.$t('incorrectCredentials');
        //   this.alertSeverity = "error",
        //   setTimeout(() => {
        //     this.alertvisibility = false;
        //   }, 2000);
        // console.log("credentials are not valid")
        // }
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

/* Transition for fading effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

/* Fixed positioning for alert in the top-right corner */
.fixed {
  position: fixed;
}

.top-4 {
  top: 1rem;
  /* Adjust as needed */
}

.right-4 {
  right: 1rem;
  /* Adjust as needed */
}
</style>