<template>
  <div class="flex justify-between p-4 bg-primary-dark">
    <div class="flex justify-center items-center">
      <img src="../assets/images/logo_white.png" alt="brandLogo" class="h-12 w-12"/>
    </div>
    <nav class="flex justify-end">
      <router-link to="/home" id="home" class="flex items-center text-lg">{{ $t('home') }}</router-link>
      <router-link to="/about" id="about" class="flex items-center text-lg">{{ $t('about') }}</router-link>
      <p @click="initiateLogout" id="logout" class="flex items-center cursor-pointer text-lg">{{ $t('logout') }}</p>
      <CustomFlagDropDown/>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
import { Icon } from '@iconify/vue';
import CustomFlagDropDown from './CustomFlagDropDown.vue';

export default {
  name: 'SideMenu',
  data() {
    return {
      selectedLanguage: this.$i18n.locale // Initialize with current locale
    };
  },
  components:{
    Icon,
    CustomFlagDropDown
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
    async initiateLogout() {
      axios
        .post("/ecommerce-api/bo/userLogout", {
          headers: {
            "Content-Type": "text/plain",
          },
        })
        .then((response) => {
          console.log('response', response);
          localStorage.removeItem("LoginResponse");
          this.$router.replace({ name: 'login' });
        })
        .catch((error) => {
          console.log('logout error', error);
        });
    }
  }
};
</script>

<style scoped>

nav a,
p {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}
</style>
