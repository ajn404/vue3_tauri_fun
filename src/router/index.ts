import { createRouter, createWebHashHistory } from 'vue-router';

//vite路由自动化
const routes = import.meta.glob('@/views/routes/**/*.vue');
export type endRoutes = {
  path: string,
  name:string,
  rank:number,
  parent:string,
  component: any,
}

export const endRoutes = Object.keys(routes).map((paths):endRoutes => {
  const nameList = paths.match(/\/views\/routes\/(.*)\.vue$/);

  const matchNameList = (nameList ? nameList[1] : '').split('/');

  const name =
    matchNameList.length > 1 &&
    matchNameList[matchNameList.length - 1] === 'index'
      ? matchNameList[matchNameList.length - 2]
      : matchNameList[matchNameList.length - 1];
  const indexName = paths.match(/\/views\/routes\/(.*)\/index\.vue$/);
  const path = indexName ? indexName[1] : nameList ? nameList[1] : '';
  const backSlash = path.match(/\//g);
  const rank = backSlash?.length || 0;

  let parent = '';
  if (rank > 0) {    
    parent =
      matchNameList.length > 1 &&
      matchNameList[matchNameList.length - 1] === 'index'
        ? matchNameList[matchNameList.length - 3]
        : matchNameList[matchNameList.length - 2];
  }

  
  return {
    path: `/${path}`,
    name,
    rank,
    parent,
    component: routes[paths],
  };
});

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: endRoutes,
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
