<template>
  <div class="user-center">我是用户中心{{ name }}</div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      name: '陈龙'
    });

    return {
      ...state
    };
  },
  beforeCreate() {
    console.log('beforeCreate---');
  },
  created() {
    console.log('created---');
  }
};
</script>

<style></style>
