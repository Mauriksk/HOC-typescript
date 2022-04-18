import { useContext } from "react"
import { ProductContext } from "./ProductCard"


export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext)
    return (
        <span className='productDescription'>{ title ? title : product.title }</span>
    )
}