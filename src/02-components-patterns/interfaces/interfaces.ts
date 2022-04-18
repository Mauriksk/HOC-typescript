import { ReactElement } from 'react';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] ;//Uno o varios
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increseby: (value: number) => void;
    product: Product;
}