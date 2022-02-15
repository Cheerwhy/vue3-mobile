<script lang="ts" setup>
import { useRouter } from 'vue-router';

interface pageHeaderProps {
  title?: string;
}
withDefaults(defineProps<pageHeaderProps>(), {
  title: '',
});

const router = useRouter();
const back = () => {
  router.go(-1);
};
</script>

<template>
  <div class="page-header">
    <van-icon name="arrow-left" class="back-icon" @click="back" />
    <span class="page-title"><slot /></span>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background-color: #fff;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & .back-icon {
    color: var(--van-gray-6);
    font-size: 25px;
    position: absolute;
    left: 5px;
  }
  & .page-title {
    font-size: 20px;
  }
}
</style>
