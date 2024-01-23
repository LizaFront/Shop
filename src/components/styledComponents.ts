import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { blue, grey } from 'assets/styles/variables';

export const WrapperNavbar = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    height: '50px',
    background: '#040441bf',
    padding: '0 40px',
    fontSize: '1.2rem',
});

export const Button = styled('button')({
    display: 'flex',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    width: '50px',
    height: '50px',
    background: '#1fa91f85',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
        background: 'green',
    },
});

// Modal

export const Overlay = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.75)',
    overflow: 'hidden',
    overflowX: 'auto',
    zIndex: 999,
    backdropFilter: 'blur(2px)',
});

export const ModalWrapper = styled('div')({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    maxWidth: '450px',
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    margin: '0 auto',
    marginTop: '40px',
});

export const ModalTitle = styled('h2')({
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontSize: '1.2rem',
});

export const ModalClose = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 'calc(100% + 12px)',
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
        background: 'rgba(255, 255, 255, 0.6)',
    },
});

export const ModalForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
});

export const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    max-width: 94%;
    min-width: 94%;
    max-height: 500px;
    min-height: 100px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
        border-color: ${blue[400]};
    }

    &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
`
);

export const ConfirmWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
});
