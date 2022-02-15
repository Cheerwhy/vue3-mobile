<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  background-color: var(--van-gray-1);
}
</style>
