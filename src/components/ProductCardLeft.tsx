import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'

interface ProductTileType {
    item: ProductItem
}

export const ProductCardLeft: React.FC<ProductTileType> = ({item}) => {
    const {increment} = useShoppingCartContext() as ShoppingCartContextType

  return (
  <div className="col">
    <div className="card">
        <div className="card-img">
            <img src={item.imageName} alt={item.name} />
            <div className="card-menu d-xl-none">
                <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={() => increment({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
            <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                QUICK VIEW
            </NavLink>
        </div>
        <div className="card-body">
            <p className="card-category-left">{item.category}</p>
            <h5 className="card-title-left">{item.name}</h5>
            <p className="card-rating-left">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price-left">${item.price}</p>
        </div>
    </div>
  </div>   
  )
}
