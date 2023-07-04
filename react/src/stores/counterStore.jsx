import create from "zustand"

const useCountStore = create(set =>({
  count: 0,
  increment: (stepper)=> set(state => ({count: state.count + stepper}))
}))

export default useCountStore;
