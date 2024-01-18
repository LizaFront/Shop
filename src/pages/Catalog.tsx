import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import CatalogItem from 'components/product/CatalogItem';
import SkeletonLoader from 'components/SkeletonLoader';
import ErrorMessage from 'components/Error';

import { errorSelector, getInitialProducts, loadingSelector, productsSelector } from 'store/productSlice';

import { IProduct } from 'models/product.data';

import { Title, Wrapper } from 'assets/styles/global.styles';
import { WrapperCatalog } from 'components/product/styledComponents';

const Catalog = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);
    const loading = useAppSelector(loadingSelector);
    const error = useAppSelector(errorSelector);

    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        dispatch(getInitialProducts('products'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setCatalog(products);
    }, [products]);

    return (
        <Wrapper>
            <Title>Catalog</Title>
            {loading ? (
                <SkeletonLoader count={4} width='100%' height='50px' />
            ) : error ? (
                <ErrorMessage />
            ) : (
                <WrapperCatalog>
                    {catalog.map(item => (
                        <CatalogItem key={item.id} {...item} />
                    ))}
                </WrapperCatalog>
            )}
        </Wrapper>
    );
};

export default Catalog;
