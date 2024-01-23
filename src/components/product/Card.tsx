/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import { changeVisibleConfirm, visibleConfirm } from 'store/modalSlice';

import SkeletonLoader from 'components/SkeletonLoader';
import ErrorMessage from 'components/Error';
import Description from 'components/Description';
import Modal from 'components/modal/Modal';
import Confirm from 'components/modal/Confirm';

import { errorSelector, getInitialProducts, loadingSelector } from 'store/productSlice';

import { IProduct } from 'models/product.data';

import { Title, Wrapper } from 'assets/styles/global.styles';
import {
    Image,
    WrapperCard,
    Price,
    WrapperSkeleton,
    Button,
    WrapperDescription,
    DeleteBtnCard,
} from './styledComponents';

const Card = memo(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loading = useAppSelector(loadingSelector);
    const error = useAppSelector(errorSelector);
    const visibleDeleteModal = useAppSelector(visibleConfirm);

    const storage = localStorage.getItem('catalog');
    const [data, setData] = useState<IProduct[]>([]);

    const getDataById = (id: string | number) => {
        if (typeof id === 'number' && storage) {
            const catalog: IProduct[] = JSON.parse(storage);
            const idCard = +id;
            const card = catalog.filter(item => item.id === idCard);
            setData(card);
        }

        if (typeof id === 'string' && storage) {
            const catalog: IProduct[] = JSON.parse(storage);
            const card = catalog.filter(item => item.id === id);
            setData(card);
        }
    };

    const goBack = () => navigate(-1);

    const onClose = () => dispatch(changeVisibleConfirm(false));

    useEffect(() => {
        dispatch(getInitialProducts('products'));
    }, []);

    useEffect(() => {
        if (id && id.length > 2) {
            getDataById(id);
        }

        if (id && id.length <= 2) {
            getDataById(+id);
        }
    }, [id, storage]);

    return (
        <Wrapper>
            {visibleDeleteModal ? (
                <Modal title='Are you sure?' onClose={onClose} visible={visibleDeleteModal}>
                    <Confirm id={id} goBack={goBack} onClose={onClose} />
                </Modal>
            ) : null}
            <WrapperCard>
                {loading ? (
                    <WrapperSkeleton>
                        <SkeletonLoader count={1} width={300} height={50} />
                        <SkeletonLoader count={1} width={250} height={50} />
                        <SkeletonLoader count={1} width={200} height={50} />
                        <SkeletonLoader count={1} width={150} height={50} />
                    </WrapperSkeleton>
                ) : error ? (
                    <ErrorMessage />
                ) : (
                    data.map(item => (
                        <Fragment key={item.id}>
                            <Image
                                src={
                                    item.image
                                        ? item.image
                                        : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
                                }
                                alt={item.title}
                            />
                            <WrapperDescription>
                                <Title>{item.title}</Title>
                                <Description text={item.description}></Description>
                                <Price>{`Price: ${item.price}$`}</Price>
                            </WrapperDescription>
                        </Fragment>
                    ))
                )}
                <Button onClick={goBack}>Go Back</Button>
                <DeleteBtnCard onClick={() => dispatch(changeVisibleConfirm(true))}>
                    <DeleteIcon fontSize='small' />
                </DeleteBtnCard>
            </WrapperCard>
        </Wrapper>
    );
});

export default Card;
