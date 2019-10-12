import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import * as types from './mutation-types'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const api = './static/products.json'

// initial state
const state = {
  added: [],
  all: {}
};

// getters
const getters = {
  allProducts: state => state.all,
  getNumberOfProducts: state => (state.all) ? state.all.length : 0,
  cartProducts: state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.all.find(p => p.id === id);

      return {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity
      }
    })
  },
};

// actions
const actions = {
  addToCart({ commit }, [product, amount]){
    commit(types.ADD_TO_CART, {
      id: product.id,
      amount
    })
    commit(types.SAVE_CART)
  },
  subtractFromCart({ commit }, [product]){
    commit(types.DECREMENT_QUANTITY, {
      id: product.id
    })
  },
  getAllProducts ({commit}) {
    return axios.get(api)
            .then(response =>
              commit(types.GET_PRODUCTS, response.data.products))
  }
};

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id, amount }) {
    const record = state.added.find(p => p.id === id);
    amount = parseInt(amount)

    if (!record) {
      state.added.push({
        id,
        quantity: amount
      })
    } else {
      record.quantity += amount
    }
  },
  [types.INCREMENT_QUANTITY] (state, { id }) {
    const record = state.added.find(p => p.id === id);
    if (record.quantity < 30) {
      record.quantity++
    }
  },
  [types.DECREMENT_QUANTITY] (state, { id }) {
    const record = state.added.find(p => p.id === id);
    if (record.quantity > 1) {
      record.quantity--
    }
  },
  [types.GET_PRODUCTS](state, products) {
    state.all = products;
  },
  [types.REMOVE_FROM_CART] (state, {id}) {
    const record = state.added.find(p => p.id === id);
    state.added.splice(state.added.indexOf(record), 1)
  },
  [types.SAVE_CART] (state) {
    window.localStorage.setItem('addedProducts', JSON.stringify(state.added));
  },
  [types.RESET_CART] (state) {
    state.added = [];
    window.localStorage.setItem('addedProducts', JSON.stringify(state.added));
  }
};

export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
