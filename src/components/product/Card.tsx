import { Fragment, memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import SkeletonLoader from 'components/SkeletonLoader';
import ErrorMessage from 'components/Error';
import Description from 'components/Description';

import { errorSelector, getInitialProducts, loadingSelector, productsSelector } from 'store/productSlice';

import { IProduct } from 'models/product.data';

import { Title, Wrapper } from 'assets/styles/global.styles';
import { Image, WrapperCard, Price, WrapperSkeleton, Button, WrapperDescription } from './styledComponents';

const Card = memo(() => {
    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);
    const loading = useAppSelector(loadingSelector);
    const error = useAppSelector(errorSelector);

    const [data, setData] = useState<IProduct[]>([]);

    const getDataById = (id: string) => {
        const idCard = +id;
        if (products) {
            const card = products.filter(item => item.id === idCard);
            setData(card);
        }
    };

    const goBack = () => navigate(-1);

    useEffect(() => {
        dispatch(getInitialProducts('products'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (id) {
            getDataById(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, products]);

    return (
        <Wrapper>
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
                            <Image src={item.image} alt={item.title} />
                            <WrapperDescription>
                                <Title>{item.title}</Title>
                                <Description text={item.description}></Description>
                                {/* <Text>{textLength(item.description)}</Text> */}
                                <Price>{`Price: ${item.price}$`}</Price>
                            </WrapperDescription>
                        </Fragment>
                    ))
                )}
                <Button onClick={goBack}>Go Back</Button>
            </WrapperCard>
        </Wrapper>
    );
});

export default Card;
