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
          aria-hidden="true"></span>

    <z-animation v-if="Number(loadType) === 4"></z-animation>

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

      }
    },

    methods: {
      computedType (type) {
        switch (Number(type)) {
          case 0:
            return 'fa-spinner fa-pulse';
          case 1:
            return 'fa-circle-o-notch';
          case 2:
            return 'fa-refresh';
          case 3:
            return 'fa-cog';
          default:
            return;
        }
      }
    },

  }
</script>
