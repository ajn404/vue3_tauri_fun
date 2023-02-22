import { createRouter, createWebHistory } from 'vue-router';
const routes = import.meta.glob('@/views/routes/**/*.vue');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.keys(routes).map((path) => {
    const name = path.match(/\/views\/routes\/(.*)\.vue$/)[1];   
    console.log(name);
     
    return {
      path: `/${name}`,
      name,
      component: routes[path],
    };
  }),
});

console.log(routes);

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
