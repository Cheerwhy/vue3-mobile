<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <page-container :key="route.path">
        <component :is="Component" />
      </page-container>
    </transition>
  </router-view>
</template>
