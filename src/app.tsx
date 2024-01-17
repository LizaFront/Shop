import { useEffect } from 'react';

import Card from 'components/product/Card';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

import { getInitialProducts, productsSelector } from 'store/productSlice';

function App() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);

    useEffect(() => {
        dispatch(getInitialProducts('products'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Card {...products[4]} />;
}

export default App;
