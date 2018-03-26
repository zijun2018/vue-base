<!-- Description: 404错误页面 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <div class="views-error flex-center">
    <div class="flex-column-row-center">
      <!-- error图标 -->
      <span class="iconfont">&#xe6e3;</span>

      <!-- 提示文字 -->
      <p class="views-error-txt">抱歉！你可能被迷失了...(404)</p>

      <!-- 返回按钮 -->
      <div class="views-error-button">
        <z-button
          :btnType="btnType"
          :btnTxt="btnTxt"></z-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "error",

    data() {
      return {
        btnTxt: '返回首页',
        btnType: 'ripple'
      }
    },

    mounted() {

    },

    methods: {},

    watch: {}
  }
</script>
