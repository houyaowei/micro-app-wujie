import { Link } from "react-router-dom"
import "./layout.css"

function header() {
  return (
    <>
      <nav className='header'>
        <div>
          <Link to='/main'>dashboard</Link>
        </div>
        <div>
          <Link to='/main/user'>用户管理</Link>
        </div>
        <div>
          <Link to='/login'>登陆</Link>
        </div>
      </nav>
    </>
  )
}
export default header;
