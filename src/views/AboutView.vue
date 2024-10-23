<template>
  <div>
    <SideMenu />
    <div class="p-4">
      <h1 class="text-3xl font-bold">{{ $t('aboutPageTitle') }}</h1>
    </div>
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import { useHead } from '@vueuse/head';

export default {
  name: 'AboutView',
  components: {
    SideMenu
  },
    setup() {
    // Use useHead to set the page title and meta tags
    useHead({
      title: 'About',
      meta: [
        { name: 'description', content: 'Learn more about us on this page.' },
      ],
    });
  }
}
</script>

<style scoped></style>
