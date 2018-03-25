<!-- Description: 全局按钮组件 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <div class="global-z-button scale-border-base flex-center"
       :class="computedBtnType(btnType)">
      <p v-html="btnTxt"></p>
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
      // 计算按钮传入值，返回不同的按钮样式
      computedBtnType(val) {
        switch (Number(val)) {
          case 1:
            return '';
          case 2:
            return '';
          case 3:
            return '';
        }
      }
    },

    watch: {}
  }
</script>
