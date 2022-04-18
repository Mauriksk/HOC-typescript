//Igualo la imagen a  ' ' para que sea opcional y evitar hacer una interface

import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg'

//Un string vacio para un ternario es conciderado que no tiene valor ( por lo que disparararia el noImage )
export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string;

    if( img ) {
        imgToShow = img
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className='productImg' src={ imgToShow } alt="Product image" />
    )
}