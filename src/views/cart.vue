<template>
  <div class="container"> <!-- Cart items -->
    <h2 class="main-content" v-show="!products.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </h2>

    <div class="shopping-cart-content" v-show="products.length">
      <ContinueButton />
      <div class="title">
        Shopping cart
      </div>

      <!-- Product #1 -->
      <div v-for="product in products" track-by="id">
        <div class="item">
          <div class="buttons" @click="removeFromCart(product)">
            <span class="delete-btn"></span>
          </div>

          <div class="image">
              <img @click="goToDetail(product.id)" :src="product.image" :alt="product.title" />
          </div>

          <div class="description">
            {{product.title}}
          </div>

          <div class="quantity">
            <button class="minus-btn" type="button" name="button" @click="subtractFromCart(product)">
              <img src="./../../static/images/minus.svg" alt="" />
            </button>
            <input class="product-amount" type="text" :value="product.quantity" readonly>
            <button class="plus-btn" type="button" name="button" @click="addToCart(product)">
              <img src="./../../static/images/plus.svg" alt="" />
            </button>
          </div>

          <div class="product-price">{{ product.price }}</div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-2">
          Subtotal:
        </div>
        <div class="col-3 totals" id="cart-subtotal">{{ subTotal }}</div>
      </div>
      <div class="row justify-content-end">
        <div class="col-2">
          Transport:
        </div>
        <div class="col-3 totals" id="cart-shipping">{{ shipping }}</div>
      </div>
      <div class="row justify-content-end">
        <div class="col-2">
          Total:
        </div>
        <div class="col-3 totals" id="cart-total">{{ total }}</div>
      </div>
      <ContinueButton />
    </div>

  </div> <!-- Cart items -->

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ContinueButton from "@/components/continue-button";

  export default {
    name: 'cart',
    components: {
      ContinueButton
    },
    data () {
      return {
        title: 'Cart'
      }
    },

    methods:{
      goToDetail(prodId) {
        this.$router.push({name:'details',params:{Pid:prodId}})
      },
      addToCart(product) {
        this.$store.commit('INCREMENT_QUANTITY', product)
      },
      subtractFromCart(product) {
          this.$store.commit('DECREMENT_QUANTITY', product)
      },
      removeFromCart(product) {
        this.$store.commit('REMOVE_FROM_CART', product)
      }
    },

    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      subTotal () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      },
      shipping () {
        return this.products.reduce((total, p) => {
          return total + 3.50 * p.quantity
        }, 0)
      },
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity + 3.50 * p.quantity
        }, 0)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/cart.css';
</style>
