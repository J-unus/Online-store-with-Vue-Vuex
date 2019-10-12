<template>
  <div class="row justify-content-end continue">
    <div class="col col-md-3 continue-button">
      <span class="white-text">CONTINUE<br></span>
      <router-link class="cover-div" to="/checkout"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'continuebutton',
    data () {
      return {
        title: 'ContinueButton',
      }
    },
  }
</script>


<style scoped>
  .continue {
    padding: 0 2rem 1rem 2rem;
    padding-top: 2rem;
  }


  .continue-button {
    background-color: #27aa2b;
    text-align: center;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    border-radius: 10px;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.3rem;
  }
</style>
