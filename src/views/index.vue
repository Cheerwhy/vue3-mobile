<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const value = ref('');
const router = useRouter();
const jump = () => {
  router.push('/detail');
};
onMounted(() => {
  window.addEventListener('resize', () => {
    const root = document.body || document.documentElement;
    console.log(root.clientHeight);
  });
});
</script>

<template>
  <section class="main">
    <header class="header">Header</header>
    <section class="body">
      <van-field id="sb" v-model="value" label="文本" placeholder="请输入一些内容" />
      <van-cell title="跳转" is-link @click="jump" />
    </section>
    <footer class="footer">Footer</footer>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  & .body {
    flex: 1;
  }
}
.header,
.footer {
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.header {
  top: 0;
}
.footer {
  bottom: 0;
}
</style>
