const lifecycles = {
    beforeLoad: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeLoad`),
    beforeMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeMount`),
    afterMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterMount`),
    beforeUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeUnmount `),
    afterUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterUnmount`),
    activated: (appWindow) => console.log(`${appWindow.__WUJIE.id} activated`),
    deactivated: (appWindow) => console.log(`${appWindow.__WUJIE.id} deactivated`),
    loadError: (url, e) => console.log(`${url} 加载失败`, e),
};

export default lifecycles;