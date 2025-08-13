import ProductDTO from '../types/ProductDTO.ts';
import type Product from '../types/Product.ts';

export type ApiResponse = Product[];
export type FetchProductsResponse = ProductDTO[];


export default async function fetchProductsUseCase () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    const rawData = await response.json() as ApiResponse;
    const actualData = rawData.map(p => new ProductDTO(
        p.id,
        p.title,
        p.price,
    ));
    return actualData as FetchProductsResponse;
}
