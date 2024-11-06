<template>
  <div class="p-4 bg-primary-dark space-y-6">
    <div class="flex justify-center">
      <img src="../assets/images/logo_white.png" alt="brandLogo" class="h-12 w-12"/>
    </div>
    <nav class="flex justify-center">
      <div class="pl-3"><CustomFlagDropDown/></div>
      <router-link to="/home" :id="SideMenuIds.navHome" class="flex items-center text-lg">{{ $t('home') }}</router-link>
      <router-link to="/about" :id="SideMenuIds.navAbout" class="flex items-center text-lg">{{ $t('about') }}</router-link>
      
      <!-- <router-link to="/store" :id="SideMenuIds.navStore" class="flex items-center text-lg">{{ $t('store') }}</router-link>
      <router-link to="/explore" :id="SideMenuIds.navExplore" class="flex items-center text-lg">{{ $t('explore') }}</router-link>
      <router-link to="/orders" :id="SideMenuIds.navOrders" class="flex items-center text-lg">{{ $t('orders') }}</router-link>
      <router-link to="/lists" :id="SideMenuIds.navLists" class="flex items-center text-lg">{{ $t('lists') }}</router-link>
      <router-link to="/dashboard" :id="SideMenuIds.navDashboard" class="flex items-center text-lg">{{ $t('dashboard') }}</router-link>
      <router-link to="/myPage" :id="SideMenuIds.navMyPage" class="flex items-center text-lg">{{ $t('myPage') }}</router-link>
       -->
      <p @click="initiateLogout" :id="SideMenuIds.navLogout" class="flex items-center cursor-pointer text-lg">{{ $t('logout') }}</p>     
    </nav>
  </div>

  <!-- <div class="flex justify-between p-4 bg-primary-dark">
    <div class="">
      <img src="../assets/images/logo_white.png" alt="brandLogo" class="h-12 w-12"/>
    </div>
    <nav class="flex justify-end">
      <router-link to="/home" :id="SideMenuIds.navHome" class="flex items-center text-lg">{{ $t('home') }}</router-link>
      <router-link to="/about" :id="SideMenuIds.navAbout" class="flex items-center text-lg">{{ $t('about') }}</router-link>
      <p @click="initiateLogout" :id="SideMenuIds.navLogout" class="flex items-center cursor-pointer text-lg">{{ $t('logout') }}</p>
      <CustomFlagDropDown/>
    </nav>
  </div> -->

</template>

<script>
import { Icon } from '@iconify/vue';
import CustomFlagDropDown from './CustomFlagDropDown.vue';
import { SideMenuIds } from '../automationTestingIds';
import apiClient from '../services/axios/axiosMiddleware';
import axios from 'axios';
export default {
  name: 'SideMenu',
  data() {
    return {
      selectedLanguage: this.$i18n.locale, // Initialize with current locale
      SideMenuIds
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
      axios.post("/ecommerce-api/bo/userLogout", {
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
