<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="container main-content" > <!-- Product view -->
    <div v-for="product in products" track-by="id">
      <div class="row" id="basket-row" v-if="proId == product.id">
        <div class="col-7 title-1">
          <h2 class="title">{{product.title}}</h2>
        </div>
        <div class="col-6 title-2">
          <h2 class="title">{{product.title}}</h2>
        </div>
        <div class="col-2 price">
          <p>{{product.price}}<i>€</i></p>
        </div>
        <div class="col" id="amount-box">
          <span>AMOUNT<br></span>
          <select v-model="selected" class="custom-select">
            <option v-for="n in 20">{{n}}</option>
          </select>
        </div>
        <div class="col-md" id="basket-box">
          <span class="white-text">ADD TO BASKET<br></span>
          <i class="fas fa-cart-plus fa-3x"></i>
          <a class="cover-div" v-b-modal.modal-1  @click="addToCart([product, selected]);setTimerModal()"></a>
        </div>
      </div>

      <div class="row content" v-if="proId == product.id">
        <div class="col">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div class="col-md">
          <img class="card-img-top img-fluid" :src="product.image" alt="Product">
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" class="text-center" hide-header hide-footer>
        <h4  class="d-inline w-100">Product added to shopping cart!</h4>
      </b-modal>
    </div>
  </div> <!-- Product view -->
</template>

<script>
  import axios from 'axios';
  import { mapGetters, mapActions } from 'vuex';

  export default{
    name:'details',

    data (){
      return{
        proId:this.$route.params.Pid,
        title:"details",
        info: 'info',
        selected: 1,
      }
    },

    computed: mapGetters({
      products: 'allProducts',
      length: 'getNumberOfProducts'
    }),

    created() {
      this.$store.dispatch('getAllProducts')
    },

    methods: {
      setTimerModal() {
          setTimeout(this.hideModal, 1500)
      },
      hideModal() {
          this.$bvModal.hide('modal-1')
      },
      ...mapActions([
        'addToCart'
      ]),
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/details.css';
</style>
