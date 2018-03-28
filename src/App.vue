<template>
  <div id="app">
    <!-- 全局组件 -->
    <z-loading v-show="isShowLoading" :loadType="loadType" :loadMsg="loadMsg"></z-loading>

    <router-view></router-view>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['isShowLoading', 'loadType', 'loadMsg'])
  }
}
</script>
