<template>
  <div class="views-test">
    <z-loading :loadType="4" :loadMsg="loadMsg"></z-loading>

    <p>{{isShowLoading}}</p>

    <div class="test-box" @click="toggleShowLoading"></div>

  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: "test",

    data() {
      return {
        // msg: isShowLoading,
        desTxt: '原名',
      }
    },

    computed: {
      // local

      // global
      ...mapState(['isShowLoading', 'loadType', 'loadMsg'])

    },

    mounted() {


    },

    methods: {
      ...mapMutations(['showLoading', 'hideLoading']),
      toggleShowLoading() {
        this.isShowLoading ? this.hideLoading() : this.showLoading({loadMsg: '放假了发掘了'});
      }
    }
  }
</script>
