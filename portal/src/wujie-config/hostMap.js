const map = {
    "//localhost:3101/": "//wujie-micro.github.io/demo-vue/",
    "//localhost:3102/": "//wujie-micro.github.io/demo-react/",
};

export default function hostMap(host) {
    if (process.env.NODE_ENV === "production") return map[host];
    return host;
}