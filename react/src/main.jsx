import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import './index.css'
import RouterConfigs from "./routers/index.jsx";
import NotMatch from "./components/app/RouterNotMatch.jsx"
import ErrorBundary from "./components/ErrorBundary"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ErrorBundary>
        <Suspense>
          <RouterProvider router={ RouterConfigs } fallbackElement={<NotMatch />}>
          </RouterProvider>
        </Suspense>
      </ErrorBundary>
    </React.StrictMode>
)
