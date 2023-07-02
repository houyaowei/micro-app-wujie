import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const currentApp = ref("")
  const setAppName=(name)=> {
    currentApp.value = name;
  }
  const getAppName = ()=> {
    return currentApp.value
  }
  return { currentApp, setAppName, getAppName }
})
