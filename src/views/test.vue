<template>
  <div class="app-test">
    <p>{{desTxt}}：{{name}}</p>
    <p>姓：{{firstName}}</p>
    <p>名：{{lastName}}</p>
    <p>全名：{{fullName}}</p>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    name: "test",

    data() {
      return {
        msg: this.$store.state.name,
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
      ...mapState(['name']),

      // globalComputed
      ...mapGetters(['fullName'])
    },

    mounted() {
      setTimeout(() => {
        this.desTxt = '变更后的姓名';
        this.CONSTRUCTION({firstName: 'first', lastName: 'last'});
      }, 3000);

    },

    methods: {
      ...mapMutations(['CONSTRUCTION']),
    }
  }
</script>
