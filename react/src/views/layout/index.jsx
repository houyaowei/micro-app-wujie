import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import { Provider } from "./contextProvider.jsx";

class Layout extends React.Component{
  render() {
    const appName ='React18 test'
    return (
      <>
        <Provider value={appName}>
          {/*<Header />*/}
          <div>
            <Outlet />
          </div>
          <Footer />
        </Provider>

      </>
    )
  }
}
export default Layout;
