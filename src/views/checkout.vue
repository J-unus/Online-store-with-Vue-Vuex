<template>
  <div class="container main-content"> <!-- Checkout view -->
    <form v-on:submit.prevent="onSubmit">
      <div class="col col-sm-4 col-lg-3">
        <h2 class="title">Buyers info</h2>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationCustom01">First name*</label>
          <input v-model="firstName" type="text" class="form-control" id="validationCustom01" placeholder="First name" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationCustom02">Last name*</label>
          <input v-model="lastName" type="text" class="form-control" id="validationCustom02" placeholder="Last name" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputAddress">Address*</label>
          <input v-model="address" type="text" class="form-control" id="inputAddress" placeholder="Address" required>
        </div>
        <div class="form-group col-md-4">
          <label for="inputCounty">City / County*</label>
          <select id="inputCounty" class="form-control">
            <option selected>Harjumaa</option>
            <option>Järvamaa</option>
            <option>Läänemaa</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip code*</label>
          <input v-model="zip" type="text" class="form-control" id="inputZip" placeholder="Zip code" required>
        </div>
      </div>

      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="inputEmail">Email*</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationCustom06">Phone Nr*</label>
          <input v-model="phonenr" type="text" class="form-control" id="validationCustom06" placeholder="Phone Nr" required>
        </div>
      </div>

      <div class="col col-sm-5 col-lg-4">
        <h2 class="title">Payment method</h2>
      </div>

      <div class="custom-control custom-radio mb-3">
        <label>
          <input type="radio" name="test" value="small" checked>
          <img src="./../../static/images/swedbank.png">
        </label>

        <label>
          <input type="radio" name="test" value="big">
          <img src="./../../static/images/lhv.png">
        </label>
        <label>
          <input type="radio" name="test" value="big">
          <img src="./../../static/images/seb.png">
        </label>
      </div>

      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>


      <button class="btn btn-primary" type="submit">Continue</button>

    </form>
  </div> <!-- Checkout view -->
</template>

<script>
  export default {
    name: 'checkout',
    data () {
      return {
        title: 'Checkout',
        firstName: '',
        lastName: '',
        address: '',
        zip: '',
        phonenr: ''
      }
    },
    methods: {
        onSubmit() {
          this.$store.commit('RESET_CART')
          this.$router.push('completion')
        }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/checkout.css';
</style>
