import Button from '@mui/material/Button/Button';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { changeVisibleConfirm } from 'store/modalSlice';
import { IProduct } from 'models/product.data';

import { ConfirmWrapper } from 'components/styledComponents';

type props = {
    id: string | undefined;
    goBack: () => void;
    onClose: () => void;
};

const Confirm = ({ id, goBack, onClose }: props) => {
    const dispatch = useAppDispatch();
    const storage = localStorage.getItem('catalog');
    const storageData: IProduct[] = storage ? JSON.parse(storage) : [];

    const removeCardById = (id: string | undefined) => {
        if (id) {
            onClose();
            goBack();
            const newData = storageData.filter(card => card.id !== id);
            localStorage.setItem('catalog', JSON.stringify(newData));
        }
    };
    return (
        <ConfirmWrapper>
            <Button variant='contained' color='warning' onClick={() => removeCardById(id)}>
                Delete
            </Button>
            <Button variant='contained' onClick={() => dispatch(changeVisibleConfirm(false))}>
                Cancel
            </Button>
        </ConfirmWrapper>
    );
};

export default Confirm;
