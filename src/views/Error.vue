<!-- Description: 404错误页面 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <div class="views-error flex-center">
    <div class="flex-column-row-center">
      <!-- error图标 -->
      <z-ripple>
        <span class="iconfont err-icon">&#xe6e3;</span>
      </z-ripple>

      <!-- 提示文字 -->
      <p class="views-error-txt">抱歉！你可能被迷失了...(404)</p>

      <!-- 返回按钮 -->
      <div class="views-error-button" @click="jumpViewIndex">
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
        // 按钮提示文字，可以加入icon
        btnTxt: '<span><i class="iconfont" style="font-size: .14rem; margin-right: .06rem;">&#xe632;</i>返回首页</span>',

        // 按钮样式，darken: 点击颜色加深，appearance: 点击显示按钮颜色
        btnType: 'darken'
      }
    },

    methods: {
      /**
       * 跳转首页
       */
      jumpViewIndex() {
        this.$router.push({name: 'index'});
      }
    }
  }
</script>
