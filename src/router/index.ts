import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index.vue';
import Detail from '@/views/detail.vue';
import Detail2 from '@/views/detail2.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
    meta: {
      transition: '',
    },
  },
  {
    path: '/detail',
    component: Detail,
    meta: {
      transition: '',
    },
  },
  {
    path: '/detail/detail2',
    component: Detail2,
    meta: {
      transition: '',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const toDepth = to.path.split('/').filter((ele) => !!ele).length; // 目标路由路径深度
  const fromDepth = from.path.split('/').filter((ele) => !!ele).length; // 来源路由路径深度
  // 根据深度的不同切换路由动画
  to.meta.transition = toDepth > fromDepth ? 'slide-left' : 'slide-right';
});

router.afterEach(() => {});

export default router;
