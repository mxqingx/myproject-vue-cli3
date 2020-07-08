import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./filters"; // global filters
import Mixin from "./mixins";
import { Button, Select, Option } from 'element-ui';
Vue.mixin(Mixin);
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
    // import echarts from "echarts";
    // Vue.prototype.$echarts = echarts;
    // 引入loadsh
import _ from "lodash";
Vue.prototype._ = _;
Vue.config.productionTip = false;
// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");