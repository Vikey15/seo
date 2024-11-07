<template>
  <div class="min-h-screen flex flex-row bg-gray-100 ">
    <SideMenuNew :is-active="sideMenu"/>
    <div class="flex-grow flex-col">
      <TopNav @sideMenu-visibility="handleUpdateBoolean"/>
      <div id="homePage" class="mx-3 mt-3 p-2 bg-white rounded-3xl min-h-screen">
      <h1 class="text-3xl font-bold">{{ $t('homePageTitle') }}</h1>
    </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
import { useHead } from '@vueuse/head';
import SideMenuNew from '../components/SideMenuNew.vue';
import TopNav from '../components/TopNav.vue';
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SideMenuNew
  },
  data() {
    return {
      sideMenu:false,
    }
  },
  setup() {
    // Use useHead to set the page title and meta tags
    useHead({
      title: 'Ztat - Home',
      meta: [
        { name: 'description', content: 'Welcome to the home page of Ztat.' },
        { name: 'keywords', content: 'vue, seo, home' },
      ],
    });
  },
  methods: {
    handleUpdateBoolean(newValue) {
      console.log(newValue,'boolean');
      this.sideMenu = newValue;
    },
  },
};
</script>

<style scoped>
</style>
