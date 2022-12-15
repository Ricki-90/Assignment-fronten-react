import React from 'react'
import { NavLink } from 'react-router-dom'

interface props {
  icon: string
  link: string
  quantity?: number
  hideOnMobile: any
}

const MenuIcon: React.FC<props> = ({link, icon, quantity, hideOnMobile }) => {

  return (
    <NavLink className= { `menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""}` } to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon