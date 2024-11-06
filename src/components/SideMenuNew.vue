<template>
    <div
        :class="['min-h-screen', 'flex', 'flex-col', 'w-56', 'bg-white', this.$i18n.locale === 'ar' ? 'rounded-l-3xl' : 'rounded-r-3xl', 'overflow-hidden']">
        <div class="flex items-center justify-start shadow-md">
            <img v-if="$i18n.locale === 'en'" src="../assets/images/logoEngPrimary.png" alt="brandLogo"
                class="h-32 w-32 ml-4" />
            <img v-if="$i18n.locale === 'ar'" src="../assets/images/logoArbPrimary.png" alt="brandLogo"
                class="h-32 w-32 mr-4" />

        </div>
        <ul class="flex flex-col py-4">
            <li class="flex justify-center items-center mb-4">
                <CustomFlagDropDown/>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="clarity:store-line" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('store') }}</span>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="humbleicons:rocket" width="1.5em" height="1.5em" />
                    </span>
                    <span class="text-sm font-medium">{{ $t('explore') }}</span>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="lsicon:order-outline" width="1.5em" height="1.5em" />                    </span>
                    <span class="text-sm font-medium">{{ $t('orders') }}</span>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="line-md:list" width="1.5em" height="1.5em" /> </span>
                    <span class="text-sm font-medium">{{ $t('lists') }}</span>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="material-symbols:team-dashboard" width="1.5em" height="1.5em" /></span>
                    <span class="text-sm font-medium">{{ $t('dashboard') }}</span>
                </a>
            </li>
            <li>
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="ri:user-fill" width="1.5em" height="1.5em" /></span>
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
                <a
                    class="flex flex-row items-center h-12 text-black hover:bg-gray-100 rounded-lg">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-primary-dark">
                        <Icon icon="solar:logout-2-outline" width="1.5em" height="1.5em" /></span>
                    <span class="text-sm font-medium">{{ $t('logout') }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import CustomFlagDropDown from './CustomFlagDropDown.vue';
import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            selectedLanguage: this.$i18n.locale,
        }
    },
    components:{
        CustomFlagDropDown,
        Icon
    },
    computed: {
        rtlClass() {
            return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr'
        },
    },
}
</script>