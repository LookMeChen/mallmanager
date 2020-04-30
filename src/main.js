import Vue from "vue";
//引入element样式文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(ElementUI)
    //开发环境或者生产环境
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    //cli3
    //components:{App},template:'<App/>'
    //cli4 render: h => h(App)
    render: h => h(App)
}).$mount("#app");