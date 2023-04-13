import { createRouter, createWebHashHistory } from 'vue-router';
import { autoRoutes } from './auto';
import { customRoute } from './customer';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...autoRoutes, ...customRoute],
});

//this code is providing error
//handling for the replace method
//of the router object.
// It ensures that errors are properly propagated,
// so that other code can handle them as needed.
const originalReplace = router.replace;
router.replace = (location) => {
  return originalReplace.call(this, location).catch((err) => err);
};
const originalPush = router.push;
router.push = (location) => {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
export * from './auto';
