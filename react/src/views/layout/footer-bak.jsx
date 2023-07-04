import styles from "./layout.css"
import { Consumer } from "./contextProvider.jsx";

function footer() {
  return (
    <>
      <Consumer>
        {
          (name) =>
            <div className='footer'>
                footer
                <div className='footer-context'>context中的值： { name }</div>
            </div>
        }
      </Consumer>
    </>
  )
}
export default footer
