import { memo } from 'react';

import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import { Tooltip } from '@mui/material';

import { Button } from './styledComponents';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { changeVisible } from 'store/modalSlice';

const AddButton = memo(() => {
    const dispatch = useAppDispatch();

    return (
        <Tooltip title='Add new card' arrow>
            <Button onClick={() => dispatch(changeVisible(true))}>
                <PostAddSharpIcon fontSize='small' />
            </Button>
        </Tooltip>
    );
});

export default AddButton;
