import React from "react"
import { createHashRouter } from "react-router-dom"
const Login  = React.lazy (()=>import("../views/login/login.jsx"))
const Layout = React.lazy  (()=>import("../views/layout/index.jsx"))
const Dashboard= React.lazy  (()=>import("../views/dashboard/index.jsx"))
const User =  React.lazy  (()=>import("../views/users/index.jsx"))
const Todo =  React.lazy  (()=>import("../views/todo/index.jsx"))
const Message =  React.lazy  (()=>import("../views/message/index.jsx"))
import NotMatch from "../components/app/RouterNotMatch.jsx"

/**
 * 路由跳转到main的时候没有默认加载dashboard,解决方案是去掉dashboard的path
 *  React.lazy暂时还不支持服务端渲染，如果需要支持要用https://github.com/gregberge/loadable-components
 */

const routersConfig = createHashRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Dashboard />
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'todo',
        element: <Todo />
      },
      {
        path: 'message',
        element: <Message />
      }
    ]
  },
  {
    path: "*",
    element: <NotMatch />
  }
])
export default routersConfig;
