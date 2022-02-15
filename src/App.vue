<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <keep-alive>
        <page-container :key="route.path">
          <component :is="Component" />
        </page-container>
      </keep-alive>
    </transition>
  </router-view>
</template>
