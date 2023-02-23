import { createRouter, createWebHistory } from 'vue-router';

//vite路由自动化
const routes = import.meta.glob('@/views/routes/**/*.vue');
const endRoutes = Object.keys(routes).map((path) => {
  const name = path.match(/\/views\/routes\/(.*)\.vue$/)[1];   
  const indexName = path.match(/\/views\/routes\/(.*)index\.vue$/);
  const endPath = indexName?indexName[1]:name;
  return {
    path: `/${endPath}`,
    name,
    component: routes[path],
  };
});
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:endRoutes
});

console.log(router);

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
