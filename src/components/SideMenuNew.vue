<template>
    <div v-if="sideBar"
        :class="['min-h-screen', 'flex', 'flex-col', 'w-56',
         'bg-white',
         'overflow-hidden','z-50','fixed',
          'top-0', 'left-0',
         'xl:z-0','xl:relative','xl:h-auto','2xl:z-0','2xl:relative','2xl:h-auto']">
        <div class="flex items-center justify-start">
            <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
                class="h-32 w-32 ml-4" />
            <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
                class="h-32 w-32 mr-4" />
            <button @click="toggleSidebar" class="text-gray-200 hover:text-gray-800">
                <Icon icon="line-md:close-circle-filled" width="1.5em" height="1.5em" />
            </button>
        </div>
        <hr class="h-4">
        <div class="flex justify-center items-center">
            <p class="text-center text-lg text-gray-600 dark:text-gray-400 m-1">{{ time }}, Sam</p>
            <Icon icon="noto:waving-hand" width="1.5em" height="1.5em" />
        </div>
        <ul class="flex flex-col py-4">
            <li class="flex justify-center items-center mb-4">
                <CustomFlagDropDown />
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="clarity:store-line" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('store') }}</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="humbleicons:rocket" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('explore') }}</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="lsicon:order-outline" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('orders') }}</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="line-md:list" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('lists') }}</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="material-symbols:team-dashboard" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('dashboard') }}</span>
                </a>
            </li>
            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="ri:user-fill" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('myPage') }}</span>
                </a>
            </li>
            <!-- <li>
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
          <span class="text-sm font-medium">Notifications</span>
          <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li> -->

            <li>
                <a class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="solar:logout-2-outline" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('logout') }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import CustomFlagDropDown from './CustomFlagDropDown.vue';
import { Icon } from '@iconify/vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            time: '',
            sideBar:false,
        };
    },
    props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
    components: {
        CustomFlagDropDown,
        Icon
    },
    methods: {
        toggleSidebar(){
            this.sideBar=false
        },
        updateTimeOfDay() {
            const currentHour = new Date().getHours();
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
    },
    watch: {
        '$i18n.locale'() {
            this.updateTimeOfDay();
        },
        isActive(oldVal,newVal){
            this.sideBar=!this.sideBar
        }

    },
    mounted() {
        this.updateTimeOfDay();
    },
}
</script>