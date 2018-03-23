<template>
  <div class="views-index flex-center">
    <div class="flex-row-column-center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
      <i class="iconfont">&#xe992;</i>
      <span class="fa fa-spinner global-z-loading" aria-hidden="true"></span>{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        msg: '主页'
      }
    },

    mounted() {
      this.alertText();
    },

    methods: {
      alertText() {
        console.log('123');
      }
    }
  }
</script>
