import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeVisible } from 'store/modalSlice';
import { addNewCard } from 'store/productSlice';

import { IProduct } from 'models/product.data';

import { ModalForm, Textarea } from '../styledComponents';

const FormModal = () => {
    const dispatch = useAppDispatch();

    const urlRegex = /^(https?:\/\/)?([a-zA-Z\d-]+\.){1,}[a-zA-Z]{2,}([a-zA-Z\d-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    const numberRegex = /^\d+$/;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IProduct>({ mode: 'onBlur' });

    const onClose = () => {
        dispatch(changeVisible(false));
    };

    const onSubmitForm = (data: IProduct) => {
        dispatch(addNewCard(data));
        reset();
        onClose();
    };

    return (
        <ModalForm noValidate onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
                id='outlined-basic'
                label='Title'
                variant='outlined'
                required
                size='small'
                {...register('title', {
                    required: 'Please enter a title',
                    minLength: {
                        value: 3,
                        message: 'Title should be more 5 letters',
                    },
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
            />
            <TextField
                id='outlined-basic'
                label='Price'
                variant='outlined'
                required
                size='small'
                {...register('price', {
                    required: 'Please enter a price',
                    pattern: {
                        value: numberRegex,
                        message: 'Only numbers',
                    },
                })}
                error={!!errors.price}
                helperText={errors.price?.message}
            />
            <TextField
                id='outlined-basic'
                label='Image url'
                variant='outlined'
                size='small'
                {...register('image', {
                    pattern: {
                        value: urlRegex,
                        message: 'Please enter a valid URL',
                    },
                })}
                error={!!errors.image}
                helperText={errors.image?.message}
            />
            <Textarea
                maxRows={10}
                aria-label='maximum height'
                required
                placeholder='Please enter card description'
                {...register('description', { required: true })}
            />
            <Button type='submit' variant='contained' disabled={!isValid}>
                Add
            </Button>
        </ModalForm>
    );
};

export default FormModal;
