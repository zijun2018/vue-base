<!-- Description: 全局按钮组件 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <!-- 点击，背景颜色变深效果 -->
  <div class="global-z-button" v-ripple>
    <!-- 按钮 -->
    <div class="global-z-button-common scale-border-base flex-center"
         :class="btnType"
         v-if="btnType !== 'ripple'">
      <p v-html="btnTxt"></p>
    </div>

    <!-- 带涟漪效果的按钮 -->
      <div class="global-z-button-common scale-border-base flex-center"
           :class="btnType"
           v-if="btnType === 'ripple'">
        <p v-html="btnTxt"></p>
      </div>
  </div>
</template>

<script>
  export default {
    name: "z-button",

    props: ['btnType', 'btnTxt'],

    data() {
      return {}
    },

    mounted() {

    },

    methods: {
/*      // 计算按钮传入值，返回不同的按钮样式
      computedBtnType(val) {
        switch (val) {
          case 'darken':
            return 'dar';
          case 2:
            return '';
          case 3:
            return '';
        }
      }*/
    },

    watch: {}
  }
</script>
