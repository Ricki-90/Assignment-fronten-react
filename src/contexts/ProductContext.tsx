import { useContext, useState } from 'react'
import { createContext } from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    right: ProductItem[]
    left: ProductItem[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getRight: (take?: number) => void
    getLeft: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [right, setRight] = useState<ProductItem[]>([])
    const [left, setLeft] = useState<ProductItem[]>([])

    const get = async (articleNumber?: string) => {
        console.log(articleNumber)
        if  (articleNumber !== undefined) {        
        const res = await fetch (`${baseUrl}/product/details/${articleNumber}`)
        setProduct (await res.json())
        }
    }

    const getAll = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !==0)
        url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getRight = async (take: number = 0) => {
        let url = `${baseUrl}/right`

        if (take !==0)
        url += `/${take}`

        const res = await fetch(url)
        setRight(await res.json())
    }

    const getLeft = async (take: number = 0) => {
        let url = `${baseUrl}/left`

        if (take !==0)
        url += `/${take}`

        const res = await fetch(url)
        setLeft(await res.json())
    }
    
    return <ProductContext.Provider value={{right, left, product, products, featured, get, getAll, getFeatured, getRight, getLeft}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider