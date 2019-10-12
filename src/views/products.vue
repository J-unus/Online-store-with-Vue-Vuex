<template>
  <div class="container main-content"> <!-- Products -->
    <div class="card-columns">
      <div class="card" v-for="product in products">
        <div class="view overlay">
          <img class="card-img-top img-fluid" :src="product.image" alt="Product">
          <div class="mask flex-center rgba-stylish-light">
            <p>{{product.title}}<br> <span class="hover-text">Click for more</span></p>
            <div class="cover-div" @click="goToDetail(product.id)"></div>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- Products -->
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'products',
    data () {
      return {
        title: 'Products',
      }
    },

    computed: mapGetters({
      products: 'allProducts',
      length: 'getNumberOfProducts'
    }),

    created() {
        this.$store.dispatch('getAllProducts')
    },

    methods:{
      goToDetail(prodId) {
        this.$router.push({name:'details',params:{Pid:prodId}})
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/products.css';
</style>
