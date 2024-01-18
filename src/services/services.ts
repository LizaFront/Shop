import axios from 'axios';

import { IProduct } from 'models/product.data';

import { getUrl } from 'utils/getUrl';

export const Services = {
    async getAllProducts() {
        return axios.get<IProduct[]>(getUrl('products'));
    },

    async getProductById(id: number | string) {
        return axios.get<IProduct>(getUrl(`products/${id}`));
    },
};
