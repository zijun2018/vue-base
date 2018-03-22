<template>
  <div class="views-index flex-center">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        msg: '主页22'
      }
    },

    mounted() {
      this.alertText();
    },

    methods: {
      alertText() {
        console.log('123');
      }
    }
  }
</script>
