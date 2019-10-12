<template>
  <div class="container p-0"> <!-- Navigation bar -->
    <nav class="navbar align-items-end navbar-expand-md navbar-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link class="navbar-brand p-0" to="/products">
        <u>Stone Shop</u>
      </router-link>
      <router-link to="/cart">
            <span class="fa-stack has-badge shopping-cart" :data-count="itemsInCart">
                <i style="" class="fa fa-shopping-cart fa-stack-2x"></i>
            </span>
      </router-link>
      <div class="collapse navbar-collapse w-100 flex-md-column" id="navbarCollapse">
        <ul class="navbar-nav ml-auto small mb-2 mb-md-0 text-for-cart">
          <li class="nav-item">
            <router-link to="/cart" class="shopping-cart">
              <div>
                <span class="fa-stack">
                  <i class="fa fa-shopping-cart"></i>
                </span>
                <span>
                  {{itemsInCart}}| € {{subTotal}}
                </span>
              </div>
            </router-link>
          </li>
          <li class="nav-item shopping-cart-text">
            <router-link class="nav-link py-1 nav-paragraph" to="/cart">SHOPPING CART</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto small mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link py-1 nav-paragraph" to="/">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link py-1 nav-paragraph" to="/products">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link py-1 nav-paragraph" to="/products">CONTACT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link py-1 nav-paragraph" to="/products">EST</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div><!-- Navigation bar -->
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    name:'navbar',
    data (){
      return{
        title:'NavBar'
      }
    },

    computed: {
      itemsInCart(){
        let cart = this.$store.getters.cartProducts;
        return cart.reduce((accum, item) => accum + item.quantity, 0)
      },
      ...mapGetters({
        products: 'cartProducts'
      }),
      subTotal () {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/navbar.css';
</style>
