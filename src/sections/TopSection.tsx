import {Link} from 'react-router-dom';
import img1 from './../assets/images/showcase-img-1.png'
import img2 from './../assets/images/showcase-img-2.png'

const TopSection: React.FC = () => {
  return (
    <section className="top-section">
      <img className="image-girl-right" src={img1} alt="girl-right" />
      <div className="showcase-body">
        <h1>SALE UP</h1>
        <h1>To 50% Off</h1>
        <p>Online shopping free home delivery over $100</p>
        <Link to="/products" className="btn-theme btn-w">
          <span className="corner-left"></span>
          <span className="corner-right"></span>
          SHOP NOW
        </Link>
      </div>
      <img className="image-girl-left" src={img2} alt="girl-left" />
    </section>
  )
}

export default TopSection
