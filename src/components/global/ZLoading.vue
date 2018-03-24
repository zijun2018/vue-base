<!-- Description: 全局的加载数据组件 -->
<!-- Author: daijun<zijun2030@gmail.com> -->
<!-- Time: 2018/3/22 -->

<template>
  <div class="global-z-loading flex-center">
    <span class="fa fa-2x fa-spin fa-fw z-loading"
          :class="computedType(type)"
          aria-hidden="true"></span>
  </div>
</template>

<script>
  export default {
    name: "z-loading",
    // type: 加载动画类型,具体可参照demo/GlobalComponent
    props: ['type'],
    data() {
      return {}
    },

    mounted() {

    },

    methods: {
      computedType (type) {
        switch (Number(type)) {
          case 1:
            return 'fa-spinner';
          case 2:
            return 'fa-circle-o-notch';
          case 3:
            return 'fa-refresh';
          case 4:
            return 'fa-cog';
          default:
            return 'fa-spinner fa-pulse'
        }
      }
    },

  }
</script>
