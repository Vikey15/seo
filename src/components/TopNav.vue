<template>
    <div :class="['topnav', { responsive: isResponsive }]" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      
      <a href="javascript:void(0);" class="icon" @click="toggleMenu">
        <Icon icon='twemoji:flag-us-outlying-islands' width="2em" height="2em"  />
      </a>
    </div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue';

  export default {
    name: 'TopNav',
    data() {
      return {
        isResponsive: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isResponsive = !this.isResponsive;
      },
    },
    components:{
        Icon
    }
  };
  </script>
  
  <style scoped>
  .topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .topnav a.active {
    background-color: #04AA6D;
    color: white;
  }
  
  .topnav .icon {
    display: none;
  }
  
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
  </style>
  