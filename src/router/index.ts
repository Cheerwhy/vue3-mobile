import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
