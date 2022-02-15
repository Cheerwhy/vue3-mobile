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
  <section class="page-container">
    <header class="header">
      <h1>Header</h1>
    </header>
    <section class="body">
      <van-divider :style="{ color: 'var(--van-blue)', borderColor: 'var(--van-blue)' }"
        >点击输入框测试粘性布局</van-divider
      >
      <van-field id="sb" v-model="value" label="文本" placeholder="请输入一些内容" />
      <van-cell title="跳转" is-link @click="jump" />
    </section>
    <footer class="footer">
      <h1>Footer</h1>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.page-container {
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
  z-index: 100;
  justify-content: center;
  align-items: center;
}

.header {
  top: 0;
}
.footer {
  bottom: 0;
}
</style>
