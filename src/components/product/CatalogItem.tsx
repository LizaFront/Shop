import { memo } from 'react';

import { IProduct } from 'models/product.data';

import { DescriptionItem, ImageItem, LinkItem, PriceItem, WrapperCatalogItem } from './styledComponents';

const CatalogItem = memo(({ id, title, image, price }: IProduct) => {
    const imageUrl = image ? image : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';

    return (
        <WrapperCatalogItem>
            <ImageItem src={imageUrl} alt={title} />
            <DescriptionItem>
                <LinkItem to={`product/${id}`}>{title}</LinkItem>
            </DescriptionItem>
            <PriceItem>{price}$</PriceItem>
        </WrapperCatalogItem>
    );
});

export default CatalogItem;
