import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/index';

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
