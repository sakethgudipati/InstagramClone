import Navbar from '../Navbar/index'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <div className="notfound-page">
      <h1 className="notfound-head">Sorry! this page isn't available</h1>
      <p className="notfound-para">
        The link you followed may be broken or the page may have been removed.
        Go back to Instagram
      </p>
    </div>
  </>
)

export default NotFound
