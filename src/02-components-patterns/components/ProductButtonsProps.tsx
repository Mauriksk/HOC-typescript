import { useContext } from "react"
import { ProductContext } from "./ProductCard"



export const ProductButtonsProps = () => {
    
    const { increseby, counter } = useContext(ProductContext)

    return (
        <div className='buttonsContainer'>
            <button
                className='buttonMinus'
                onClick={ ()=> increseby(-1) }
            >
            -
            </button>
            <div className='countLabel'>
                {counter}
            </div>
            <button 
                className='buttonAdd'
                onClick={ ()=> increseby(1) }
            >
                +
            </button>
        </div>
    )
}