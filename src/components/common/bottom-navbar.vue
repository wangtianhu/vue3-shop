<template>
  <div class="nav-bar">
    {{ activeCom }}
    {{ testCom }}
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li @click="clickChangeNav(item, index)" :class="{ 'active': activeIndex === index }">
          <p class="icon"><span :class="['iconfont', item.icon]"></span></p>
          <p class="name" :class="{ 'active': activeIndex === index }">{{ item.name }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { reactive, nextTick, onMounted, computed, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import router from '@/router.js';  // 两种路由跳转方法
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      activeIndex: 0,
      testIndex: 0,
      list: [
        {
          icon: 'icon-zhuye',
          name: '首页',
          jump: 'home'
        },
        {
          icon: 'icon-fenlei',
          name: '分类',
          jump: 'goods-classification'
        },
        {
          icon: 'icon-gouwuche',
          name: '购物车',
          jump: 'shopping-cart'
        },
        {
          icon: 'icon-ren',
          name: '我的',
          jump: 'user-center'
        }
      ]
    });
    onMounted(async () => {
      await nextTick();
      setTimeout(() => {
        let { name } = route;
        state.activeIndex = state.list.findIndex((el) => el.jump === name);
      }, 100);
    });

    const clickChangeNav = (item, index) => {
      state.activeIndex = index;
      state.testIndex = state.activeIndex;
      console.log('route---', item, route);
      router.push({
        name: item.jump
      });
    };

    let indexChange = {
      activeCom: computed(() => {
        return `当前index变化${state.activeIndex}`;
      }),
      testCom: computed(() => {
        return `当前testindex变化${state.testIndex}`;
      })
    };

    return {
      ...toRefs(state),
      clickChangeNav,
      ...indexChange
    };
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/iconfont.css';
.nav-bar {
  width: 100%;
  background: #ffffff;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 25%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0.1rem;
      padding-top: 0.2rem;

      .icon {
      }
      .name {
        margin-top: 0.2rem;
        font-size: 0.24rem;
        color: #666666;
      }
      .active {
        color: #1baeae;
      }
    }
    .active {
      color: #1baeae;
    }
  }
}
</style>
