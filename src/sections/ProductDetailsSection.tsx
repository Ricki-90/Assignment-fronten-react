import React from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductTilesType {
    item: ProductItem
}

const ProductDetailsSection: React.FC<ProductTilesType> = ({item}) => {

    console.log(item)
    return (
        <section className="product-details">
            <div className="container">
                <div>
                    <div>{item.name}</div>
                    <img src={item.imageName} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsSection