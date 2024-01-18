import { memo } from 'react';

import { IProduct } from 'models/product.data';
import { DescriptionItem, ImageItem, LinkItem, PriceItem, WrapperCatalogItem } from './styledComponents';

const CatalogItem = memo(({ id, title, image, price }: IProduct) => {
    return (
        <WrapperCatalogItem>
            <ImageItem src={image} alt={title} />
            <DescriptionItem>
                <LinkItem to={`product/${id}`}>{title}</LinkItem>
            </DescriptionItem>
            <PriceItem>{price}$</PriceItem>
        </WrapperCatalogItem>
    );
});

export default CatalogItem;
