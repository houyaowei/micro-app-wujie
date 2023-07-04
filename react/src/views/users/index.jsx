import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd-mobile";
import ThemeContext from "@/views/layout/createThemeContext"

export default function User(){
  const [counter, setCounter] = useState(0)
  const context = useContext(ThemeContext)

  useEffect(()=> {
    // console.log("useEffect invoke")

    return () => {
      //先执行cleanup,在执行useEffect，页面卸载时也会执行
      // console.log("clean up invoke")
    }
  })

  return (
    <div style={{ backgroundColor: context.background}}>
      <div>user components</div>

      <div style={ { backgroundColor: 'blueviolet' }}>你已经点击了{ counter } 次</div>
      <Button size="small" onClick={() => setCounter(counter + 1)}>点击增加</Button>
    </div>
  )
}
