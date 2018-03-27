<template>
  <div class="views-index flex-center">
    <div class="flex-row-column-center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
      <i class="iconfont">&#xe992;</i>
      <span class="fa fa-spinner" aria-hidden="true"></span>{{ msg }}</div>
    <z-loading :loadType="loadType"></z-loading>
  </div>
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        msg: '主页',

        loadType: '1',
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
