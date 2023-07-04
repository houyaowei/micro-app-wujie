/**
 * 路由渲染
 * 遗留问题：增加自定义属性redirect，无效
 */
import { Route, Routes, Navigate } from "react-router-dom";
import routersConfig from "./index.jsx";
console.log('routersConfig:', routersConfig)

const _renderRoutes = (routes = []) => {
  return routes.map((item, index) => {
    if (item && item.children) {
      return (
        <Route path={item.path} element={item.element} key={index}>
          { _renderRoutes(item.children)}
          { item.redirect ?
            (<Route path={ item.path } element={<Navigate to={item.redirect} />}></Route>) :
            (<Route path={ item.path } element={<Navigate to={item.children[0].path} />}></Route>)
          }
        </Route>
      );
    } else {
      return (
        <Route path={item.path} element={item.element} key={index}></Route>
      );
    }
  });
};

export default function renderRouter() {
  return (
    <>
      <Routes>{ _renderRoutes(routersConfig)}</Routes>
    </>
  );
}

