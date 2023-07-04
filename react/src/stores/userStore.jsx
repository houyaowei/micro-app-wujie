import create from "zustand"
import { persist } from "zustand/middleware";

const initState = {
  users: [],
  loginUserInfo: {
    loginStatus: false,
    userInfo: {}
  }
}

const useUserStore = create(persist(set => ({
  ...initState,
  addUser: (user)=> set(state => ({users: state.users.concat(user)})),
  setUserInfo: (info) =>
    set(state => ({ loginUserInfo: { ...state.loginUserInfo, loginStatus: true, userInfo: info } }))
}),
  {
    name: 'user-storage',
    getStorage: () => sessionStorage
  }
))

export default useUserStore
