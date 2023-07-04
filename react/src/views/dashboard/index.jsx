import React, { useEffect, useState, useRef } from "react";

import useUserStore from "../../stores/userStore.jsx";
import { getAllUses } from "@/services/user"


export default function Dashboard(){
  const renderRef = useRef(true)
  const [data, setData] = useState([]);

  const users = useUserStore(state => state.users)
  const userInfo = useUserStore(state => state.loginUserInfo)
  const addUser = useUserStore(state => state.addUser)

  console.log('store中的方法:', addUser)
 
  const getUsers = async  ()=> {
      const _data = await getAllUses()
      addUser(_data)
      setData(_data)
  }
  useEffect( ()=> {
    if(renderRef.current) {
      getUsers()
      renderRef.current = false
    }
  },[])

  return (
    <>
      {
        data.map(item => (
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.id}</li>
                <li>{item.title}</li>
            </ul>
          )
        )
      }
    </>
  )
}
