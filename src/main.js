import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  console.log('错误---', err, vm, info);
};

app.config.warnHandler = (msg, vm, info) => {
  // 警告
  console.log('警告---', msg, vm, info);
};
app.config.isCustomElement = (tag) => tag.startsWith('aa-');

app.config.globalProperties.gan = 'gan'; // 替代vue2  vue.prototype.
import Swipe from 'vant/lib/swipe';
import VanImage from 'vant/lib/image';
import Lazyload from 'vant/lib/lazyload';

import '@/assets/css/common.css';
import SwipeItem from 'vant/lib/swipe-item';

app.use(Swipe);
app.use(VanImage);
app.use(Lazyload);
app.use(SwipeItem);
// app.config.optionMergeStrategies.hello = (par, chi, vm) => {
//   return `hello,${chi}`;
// };

console.log('router---', router);
app.use(router);
app.mount('#app');
