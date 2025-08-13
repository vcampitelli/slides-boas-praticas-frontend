import ProductDTO from './types/ProductDTO.ts';

export default class ProductPresenter {

    getPrice (product: ProductDTO): number {
        return product.price;
    }

    formatPrice (product: ProductDTO): string {
        return this.getPrice(product)
            .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
    }
}
