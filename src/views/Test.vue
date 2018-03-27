<template>
  <div class="views-test">
    <p>{{desTxt}}：{{testName}}</p>
    <p>姓：{{firstName}}</p>
    <p>名：{{lastName}}</p>
    <p>全名：{{fullName}}</p>
    <p>年龄：{{testAge}}</p>

    <div class="test-box"></div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: "test",

    data() {
      return {
        msg: this.$store.state.test.name,
        desTxt: '原名',
      }
    },

    computed: {
      // localComputed
      firstName() {
        return this.msg + '_first'
      },
      lastName() {
        return this.msg + '_last'
      },

      // globalState
      ...mapState({
        testName: state => state.test.name,
        testAge: state => state.test.age
      }),

      // globalComputed
      ...mapGetters(['fullName'])
    },

    mounted() {
      setTimeout(() => {
        this.desTxt = '变更后的姓名';
        this.CONSTRUCTION({firstName: 'lalala', lastName: 'hahaha'});
        this.changeName({firstName: 'liu', lastName: 'jing'})
      }, 3000);


    },

    methods: {
      ...mapMutations(['CONSTRUCTION']),
      ...mapActions(['changeName']),
    }
  }
</script>
