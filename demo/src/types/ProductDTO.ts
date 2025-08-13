export default class ProductDTO {
    public price: number;

    constructor (
        public id: number,
        public name: string,
        price: number
    ) {
        this.price = price / 100;
    }
}
