<template>
  <div>
    <p class="text-center">Thank you for shopping in Stone Shop!</p>

    <div class="row justify-content-center continue">
      <div class="col col-md-5 continue-button">
        <span class="white-text">Continue shopping<br></span>
        <router-link class="cover-div" to="/"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'completion',
    data () {
      return {
        title: 'Completion',
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/completion.css';
</style>
