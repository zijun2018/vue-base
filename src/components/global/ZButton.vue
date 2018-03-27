<!-- Description: 全局按钮组件 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/25 -->

<template>
  <!-- 按钮 -->
  <div class="global-z-button flex-center"
       :class="btnType || 'darken'">
    <p v-html="btnTxt || '确认'"
       class="flex-row-column-center"></p>
  </div>

</template>

<script>
  export default {
    name: "z-button",

    /*
    * 全局按钮组件需要接收的值
    * btnType {String} 'darken':加载效果，'appearance':显示背景效果
    * btnType {String} 可以是文本（txt），也可以是html
    * */
    props: ['btnType', 'btnTxt'],

  }
</script>
