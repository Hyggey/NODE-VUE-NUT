import Vue from 'vue'

// 引入vant-ui组件库
import { 
    Button,
    Swipe, 
    SwipeItem,
    Lazyload,
    Search,
    TreeSelect, 
    Image as VanImage,
    NavBar,
    Divider,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton 
 } from 'vant';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(TreeSelect);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(Divider);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

// 公共组件
// 底部tabbar组件
Vue.component('zz-tabbar', resolve => require(['@/components/tabbar'], resolve))