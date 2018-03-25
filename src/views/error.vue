<!-- Description: 404错误页面 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <div class="views-error flex-center">
    <div class="flex-column-row-center">
      <span class="iconfont">&#xe6e3;</span>
      <p class="views-error-txt">抱歉！你可能被迷失了...(404)</p>
      <div class="views-error-button">
        <z-button :btnTxt="btnTxt"></z-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "error",

    data() {
      return {
        btnTxt: '返回首页'
      }
    },

    mounted() {

    },

    methods: {},

    watch: {}
  }
</script>
