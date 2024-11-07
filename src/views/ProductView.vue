<template>
    <div class="min-h-screen flex flex-row bg-gray-100 ">
        <SideMenuNew :is-active="sideMenu" />
        <div class="flex-grow flex-col">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div id="homePage" class="mx-3 mt-3 p-2 bg-white rounded-3xl min-h-screen">
                <!-- <h1 class="text-3xl font-bold">Products</h1> -->
                <div class="flex justify-start items-center">
                    <p class="text-center text-lg text-gray-600 dark:text-gray-400 m-1 font-extrabold">{{ time }}, Sam
                    </p>
                    <Icon icon="noto:waving-hand" width="1.5em" height="1.5em" />
                </div>
                <div class="flex justify-start items-center">
                    <p class="text-center text-lg text-gray-600 dark:text-gray-400 m-1 font-extrabold">What do you want
                        to order today ?</p>
                </div>
                <div class="flex justify-start relative items-center">
                    <input type='text' placeholder='Search by Supplier, Category, Product'
                        class="pr-4 pl-14 py-3 text-sm text-black rounded-3xl bg-gray-100 border border-gray-400 w-full outline-[#333]" />
                    <div class="absolute left-4">
                        <Icon icon="icon-park-outline:search" width="1.5em" height="1.5em" class="text-gray-400" />
                    </div>
                </div>

                <!-- Carousel starts -->
                <div class="flex justify-center items-center mx-auto my-4">

                    <div id="default-carousel" class="relative w-full" @keydown.left="prevSlide"
                        @keydown.right="nextSlide">
                        <!-- Carousel wrapper -->
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-md">
                            <!-- Carousel items -->
                            <div v-for="(item, index) in items" :key="index"
                                class="absolute inset-0 transition duration-700 ease-in-out"
                                :class="{ hidden: index !== activeIndex }">
                                <img :src="item"
                                    class="block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
                                    alt="..." />
                            </div>
                        </div>
                        <!-- Slider indicators -->
                        <div
                            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button v-for="(item, index) in items" :key="index" type="button"
                                class="w-3 h-3 rounded-full bg-gray-400" :aria-current="activeIndex === index"
                                :aria-label="'Slide ' + (index + 1)" @click="goToSlide(index)"></button>
                        </div>
                        <!-- Slider controls -->
                        <button type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                            <span @click="prevSlide"
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                            <span @click="nextSlide"
                                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                </div>
                <!-- Carousel ends -->

                <div class="flex justify-between items-center">
                    <p class="text-center text-lg text-gray-600 dark:text-gray-400 m-1 font-extrabold">Suppliers</p>
                    <button class="flex justify-center  items-center bg-gray-100 rounded-md p-1">
                        <p class="text-center text-lg text-gray-600 dark:text-gray-400 font-extrabold">More</p>
                        <Icon icon="iconamoon:arrow-right-2" width="1.5em" height="1.5em" />
                    </button>
                </div>

                <div class="flex justify-around items-center my-2 space-x-2">
                    <div class="border border-gray-200 rounded-lg m-2">
                        <div class="flex justify-center items-center">
                        <img src="../assets/images/passwordUpdated.svg" alt="card-image" class="h-10 w-10 rounded-lg object-cover m-3"/>
                    </div>
                        <p class="text-center text-lg text-gray-600 dark:text-gray-400 font-medium m-3">Al Kabeer</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg m-2">
                        <div class="flex justify-center items-center">
                        <img src="../assets/images/passwordUpdated.svg" alt="card-image" class="h-10 w-10 rounded-lg object-cover m-3"/>
                    </div>
                        <p class="text-center text-lg text-gray-600 dark:text-gray-400 font-medium m-3">Al Kabeer</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg m-2">
                        <div class="flex justify-center items-center">
                        <img src="../assets/images/passwordUpdated.svg" alt="card-image" class="h-10 w-10 rounded-lg object-cover m-3"/>
                    </div>
                        <p class="text-center text-lg text-gray-600 dark:text-gray-400 font-medium m-3">Al Kabeer</p>
                    </div>
                    <div class="border border-gray-200 rounded-lg m-2">
                        <div class="flex justify-center items-center">
                        <img src="../assets/images/passwordUpdated.svg" alt="card-image" class="h-10 w-10 rounded-lg object-cover m-3"/>
                    </div>
                        <p class="text-center text-lg text-gray-600 dark:text-gray-400 font-medium m-3">Al Kabeer</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import SideMenuNew from '../components/SideMenuNew.vue';
import TopNav from '../components/TopNav.vue';
import { Icon } from '@iconify/vue';
import milkImg from '../assets/images/milkImg.jpg'
import vegetableInbag from '../assets/images/vegetableInbag.jpg'
export default {
    name: 'ProductView',
    components: {
        TopNav,
        SideMenuNew,
        Icon
    },
    data() {
        return {
            sideMenu: false,
            time: '',
            items: [vegetableInbag, milkImg
            ],
            activeIndex: 0,
        }
    },
    setup() {
        // Use useHead to set the page title and meta tags
        useHead({
            title: 'Ztat - Products',
            meta: [
                { name: 'description', content: 'Products List' },
                { name: 'keywords', content: 'products' },
            ],
        });
    },
    methods: {
        updateTimeOfDay() {
            const currentHour = new Date().getHours();
            console.log("CurrentHour", currentHour);
            if (currentHour >= 5 && currentHour < 12) {
                this.time = this.$t('goodMorning');
            } else if (currentHour >= 12 && currentHour < 17) {
                this.time = this.$t('goodAfternoon');
            } else if (currentHour >= 17 && currentHour < 21) {
                this.time = this.$t('goodEvening');
            } else {
                this.time = this.$t('goodMorning');
            }
        },
        handleUpdateBoolean(newValue) {
            this.sideMenu = newValue;
        },
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.items.length;
        },
        prevSlide() {
            this.activeIndex =
                (this.activeIndex - 1 + this.items.length) % this.items.length;
        },
        goToSlide(index) {
            this.activeIndex = index;
        },
    },
    watch: {
        '$i18n.locale'() {
            this.updateTimeOfDay();
        },

    },
    mounted() {
        this.updateTimeOfDay();
    },
};
</script>

<style scoped></style>