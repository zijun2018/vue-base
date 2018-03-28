<!-- Description: 全局的加载数据组件 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/22 -->

<template>
  <div class="global-z-loading flex-column flex-center"
       :class="{'bg-level': loadMsg}">

    <!-- 加载图标 -->
    <!-- iconAwesome自带旋转图标 -->
    <span class="fa fa-4x fa-spin fa-fw z-loading-icon"
          :class="computedType(loadType)"
          v-if="isShowFaSpin"
          aria-hidden="true"></span>
    <!-- 自己定义的svg loading -->
    <div class="z-loading-square flex-center"
         v-if="Number(loadType) === 4">
      <div class="css-square square1"></div>
      <div class="css-square square2"></div>
      <div class="css-square square3"></div>
      <div class="css-square square4"></div>
      <div class="css-square square5"></div>
      <div class="css-square square6"></div>
      <div class="css-square square7"></div>
      <div class="css-square square8"></div>
    </div>

    <!-- 加载文字说明 -->
    <p class="z-loading-txt"
       v-if="loadMsg">{{loadMsg}}</p>
  </div>
</template>

<script>
  export default {
    name: "z-loading",
    // loadType: 加载动画类型, loadMsg: 加载文字说明
    props: ['loadType', 'loadMsg'],
    data() {
      return {
        // 是否显示iconAwesome的加载动画
        isShowFaSpin: false,
      }
    },

    methods: {
      computedType (type) {
        switch (Number(type)) {
          case 1:
            this.isShowFaSpin = true;
            return 'fa-circle-o-notch';
          case 2:
            this.isShowFaSpin = true;
            return 'fa-refresh';
          case 3:
            this.isShowFaSpin = true;
            return 'fa-cog';
          default:
            this.isShowFaSpin = true;
            return 'fa-spinner fa-pulse'
        }
      }
    },

  }
</script>
