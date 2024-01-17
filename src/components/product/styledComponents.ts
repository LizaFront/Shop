import { styled } from '@mui/system';

export const WrapperCard = styled('div')({
    display: 'flex',
    width: '100%',
    minHeight: '50vh',
    padding: '20px',
    background: '#fff',
    boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
});

export const Image = styled('img')({
    display: 'block',
    maxWidth: '30%',
    maxHeight: '450px',
    objectFit: 'contain',
});

export const Description = styled('div')({
    display: 'block',
    position: 'relative',
    padding: '0 30px',
    width: '70%',
});

export const Text = styled('div')({
    display: 'block',
    width: '100%',
    fontSize: '1.1rem',
});

export const Price = styled('div')({
    display: 'block',
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '1.8rem',
});
