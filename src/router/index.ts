import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    meta: {
      transition: '',
    },
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue'),
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
  const toDepth = to.path.split('/').filter((ele) => !!ele).length;
  const fromDepth = from.path.split('/').filter((ele) => !!ele).length;
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

router.afterEach(() => {
});

export default router;
