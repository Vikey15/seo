<template>
  <div>
    <SideMenu />
    <div class="p-4">
      <h1 class="text-3xl font-bold">{{ $t('homePageTitle') }}</h1>
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'HomeView',
  components: {
    SideMenu,
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
};
</script>

<style scoped>
</style>
