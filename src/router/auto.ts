//vite路由自动化
const routes = import.meta.glob('@/views/routes/**/*.vue');

export type autoRoute = {
  path: string;
  name: string;
  rank: number;
  parent: string;
  component: any;
  redirect?: any;
};

export const autoRoutes = Object.keys(routes).map((paths): autoRoute => {
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

  const resRoute: autoRoute = {
    path: `/${path}`,
    name,
    rank,
    parent,
    component: routes[paths],
  };

  return resRoute;
});
