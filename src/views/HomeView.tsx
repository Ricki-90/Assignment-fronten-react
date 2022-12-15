import React, {useEffect} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import TopSection from '../sections/TopSection'
import ProductGridSection from '../sections/ProductGridSection'
import BannersSection from '../sections/BannersSection'
import SupportIconsSection from '../sections/SupportIconsSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import FlashsalesRightSection from '../sections/FlashsalesRightSection'
import FlashsalesLeftSection from '../sections/FlashsalesLeftSection'

const HomeView: React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType
  const {right, getRight} = useProductContext() as ProductContextType
  const {left, getLeft} = useProductContext() as ProductContextType

    useEffect(() => {
      getFeatured(8)
    }, [])

    useEffect(() => {
      getRight(4)
    }, [])

    useEffect(() => {
      getLeft(4)
    }, [])

  return (
    <>
      <header>
       <MainMenuSection />
       <TopSection />
      </header>
      <ProductGridSection title="Featured Products" items={featured} />
      <BannersSection />
      <FlashsalesRightSection title={''} items={right} />
      <FlashsalesLeftSection title={''} items={left} />
      <SupportIconsSection  />
      <FooterSection />
    </>
  )
}

export default HomeView