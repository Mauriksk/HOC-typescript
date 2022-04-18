
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';

//Usaremos el context
export const ProductContext = createContext({} as ProductContextProps )
const { Provider } = ProductContext

export const ProductCard = ({ children ,product }: Props) => {

    const { counter, increseby } = useProduct()

  return (
    <Provider value={{
        counter,
        increseby,
        product
    }} >
        <div className='productCard'>
            {children}
        </div>
    </Provider>
  )
}


