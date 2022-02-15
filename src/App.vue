<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const value = ref('');

onMounted(() => {
  window.addEventListener('resize', () => {
    const root = document.body || document.documentElement;
    console.log(root.clientHeight);
  });
});
</script>

<template>
  <header class="header"></header>
  <section class="page-container">
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  </section>
  <footer class="footer"></footer>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 2;
}
.page-container {
  height: 100%;
}
.footer {
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  bottom: 0;
  z-index: 2;
}
</style>
