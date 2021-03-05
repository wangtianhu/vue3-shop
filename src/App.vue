<template>
  <div class="main">
    <router-view></router-view>
    <div class="nav">
      <bottom-navbar />
    </div>
    <Mask />
  </div>
</template>

<script>
import BottomNavbar from '@/components/common/bottom-navbar.vue';
import Mask from '@/components/common/mask.vue';
console.log('BottomNavbar---', BottomNavbar);
export default {
  components: {
    BottomNavbar,
    Mask
  },
  name: 'App'
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: auto;
}
.nav {
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
}
</style>
