import create from "zustand"
import CounterStore from "./counterStore.jsx";
import UserStore from "./userStore.jsx";

//TODO: 集合应用场景
const useBundStore = create((set)=> ({
  ...CounterStore(set),
  ...UserStore(set),
}))

export default useBundStore;
