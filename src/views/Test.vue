<template>
  <div class="views-test">
    <z-scroll class="wrapper"
              :data="data"
              @pulldown="onPullDown"
              @pullup="onPullUp">
      <ul class="content">
        <li v-for="item in data" :key="item.id" class="flex-center"><img v-lazy="item"></li>
      </ul>
    </z-scroll>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: "test",

    data() {
      return {
        // msg: isShowLoading,
        desTxt: '原名',
        arrImg: [
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2544269114,2104066965&fm=27&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=845224913,672761462&fm=27&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=387884776,3988120331&fm=200&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1905472040,363557435&fm=27&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3448661152,313512508&fm=11&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2154583913,2180497297&fm=11&gp=0.jpg'
        ],
        arrImg2: [
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1326078845,2629653498&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=370892996,380027108&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3464415183,560303913&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1970937905,964513165&fm=27&gp=0.jpg'
        ],
        data: [],
      }
    },

    computed: {
      // local

      // global
      ...mapState(['isShowLoading', 'loadType', 'loadMsg'])

    },
    created() {
      this.onPullDown();
    },

    mounted() {


    },

    methods: {
      ...mapMutations(['showLoading', 'hideLoading']),
      onPullUp() {
        this.data = [...this.arrImg, ...this.arrImg2];
      },
      onPullDown() {
        this.data = this.arrImg;
      }
    }
  }
</script>
