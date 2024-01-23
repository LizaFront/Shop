import { useEffect, useState } from 'react';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import CatalogItem from 'components/product/CatalogItem';
import SkeletonLoader from 'components/SkeletonLoader';
import ErrorMessage from 'components/Error';
import AddButton from 'components/AddButton';
import Modal from 'components/modal/Modal';
import Form from 'components/modal/ModalForm';

import {
    errorSelector,
    getInitialProducts,
    loadingSelector,
    productsSelector,
    saveLocalStorage,
} from 'store/productSlice';

import { Title, Wrapper } from 'assets/styles/global.styles';
import { WrapperCatalog } from 'components/product/styledComponents';
import { IProduct } from 'models/product.data';
import { changeVisible, visibleSelector } from 'store/modalSlice';

const Catalog = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);
    const loading = useAppSelector(loadingSelector);
    const error = useAppSelector(errorSelector);
    const visibleModal = useAppSelector(visibleSelector);

    const storage = localStorage.getItem('catalog');

    const [catalog, setCatalog] = useState<IProduct[]>([]);

    const onClose = () => {
        dispatch(changeVisible(false));
    };

    useEffect(() => {
        if (storage && JSON.parse(storage).length > 0) {
            dispatch(saveLocalStorage(JSON.parse(storage)));
        } else {
            dispatch(getInitialProducts('products'));
            localStorage.setItem('catalog', JSON.stringify(products));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setCatalog(products);
        localStorage.setItem('catalog', JSON.stringify(products));
    }, [products]);

    return (
        <>
            <Wrapper>
                {visibleModal ? (
                    <Modal title='Add new card' onClose={onClose} visible={visibleModal}>
                        <Form />
                    </Modal>
                ) : null}
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
            <AddButton />
        </>
    );
};

export default Catalog;
