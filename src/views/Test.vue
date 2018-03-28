<template>
  <div class="views-test">

    <p>{{isShowLoading}}</p>

    <div class="test-box" @click="toggleShowLoading"></div>

    <z-animation></z-animation>

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
        this.isShowLoading ? this.hideLoading() : this.showLoading({loadType: 4, loadMsg: '放假了发掘了'});
      }
    }
  }
</script>
