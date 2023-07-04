import React from "react"
import { ErrorBlock, Space } from 'antd-mobile'
import { useNavigate} from "react-router-dom";

function RouterNotMatch() {
  const navigator = useNavigate()
  const backToMainPage =()=> {
    navigator("/")
  }
  return (
      <div>

      <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='default' description={
              <div>跑到外星球了,<span className="back" onClick={backToMainPage}>点击这里</span>返回首页</div>
          }/>
      </Space>
      </div>
  )
}
export default RouterNotMatch
