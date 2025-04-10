import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ImageUploader from 'vue-image-upload-resize'

Vue.use(ImageUploader)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
