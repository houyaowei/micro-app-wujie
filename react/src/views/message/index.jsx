import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd-mobile";
import ThemeContext from "@/views/layout/createThemeContext"

export default function User(){
  const [counter, setCounter] = useState(0)
  const context = useContext(ThemeContext)
  console.log(context)

  useEffect(()=> {

    return () => {
      //先执行cleanup,在执行useEffect，页面卸载时也会执行
      // console.log("clean up invoke")
    }
  })

  return (
    <div style={{ backgroundColor: context.background}}>
      <div>message</div>

    </div>
  )
}
