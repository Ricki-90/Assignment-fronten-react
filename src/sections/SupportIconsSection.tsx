import React from 'react'
import MenuIcon from '../components/MenuIcon'

const SupportIconsSection: React.FC = () => {
  return (
    <nav className="d-flex justify-content-center">
      <div className="container-s">
        <div className="menu-icons">
          <div className="icons-justi">
            <MenuIcon link="/compare" icon="fa-regular fa-headset" hideOnMobile={undefined} />
          </div>
          <h2>Customer Support</h2>
          <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className="menu-icons">
          <div className="icons-justi">
            <MenuIcon link="/compare" icon="fa-light fa-credit-card" hideOnMobile={undefined} />
          </div>
          <h2>Secured Payment</h2>
          <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className="menu-icons">
          <div className="icons-justi">
            <MenuIcon link="/compare" icon="fa-light fa-truck" hideOnMobile={undefined} />
          </div>
          <h2>Free Home Delivery</h2>
          <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className="menu-icons">
          <div className="icons-justi">
            <MenuIcon link="/compare" icon="fa-light fa-truck" hideOnMobile={undefined} />
          </div>
          <h2>30 Day Reuters</h2>
          <p>Village did removed enjoyed explain talking.</p>
        </div>
      </div>
    </nav>

  )
}

export default SupportIconsSection