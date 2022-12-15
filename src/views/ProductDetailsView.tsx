import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'

const ProductDetailsView: React.FC = () => {
  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.get(id)
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection parentPage="Products"  currentPage={productContext.product.name} />
      <ProductDetailsSection item={productContext.product} />
      <FooterSection />
    </>
  )
}

export default ProductDetailsView