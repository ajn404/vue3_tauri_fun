import { createRouter, createWebHashHistory } from 'vue-router';

//vite路由自动化
const routes = import.meta.glob('@/views/routes/**/*.vue');
export const endRoutes = Object.keys(routes).map((path) => {
  const nameList = path.match(/\/views\/routes\/(.*)\.vue$/);
    const name = nameList?nameList[1]:"";
    const indexName = path.match(/\/views\/routes\/(.*)index\.vue$/);
    const endPath = indexName ? indexName[1] : name;
    return {
      path: `/${endPath}`,
      name: endPath,
      component: routes[path],
    };
});

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: endRoutes,
});
console.log(endRoutes);

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
