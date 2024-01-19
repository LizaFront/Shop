import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Card
export const WrapperCard = styled('div')({
    display: 'flex',
    position: 'relative',
    width: '100%',
    minHeight: '50vh',
    padding: '20px',
    background: '#fff',
    boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
    marginTop: '30px',
    borderRadius: '10px',
});

export const Image = styled('img')({
    display: 'block',
    maxWidth: '30%',
    maxHeight: '450px',
    objectFit: 'contain',
});

export const WrapperDescription = styled('div')({
    display: 'block',
    position: 'relative',
    padding: '0 30px',
    width: '70%',
});

export const Text = styled('div')({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    fontSize: '1.1rem',
});

export const Price = styled('div')({
    display: 'block',
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '1.8rem',
});

export const WrapperSkeleton = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: '80px',
});

export const Button = styled('button')({
    display: 'flex',
    position: 'absolute',
    bottom: '5px',
    left: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    textDecoration: 'underline',
    transition: 'all 0.3s',
    '&:hover': {
        color: 'red',
    },
});
export const DetailsBtn = styled('button')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-30px',
    right: 0,
    maxWidth: '150px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: 'none',
    textTransform: 'uppercase',
    color: '#fff',
    background: '#040441bf',
    '&:hover': {
        color: 'red',
    },
});

// Catalog

export const WrapperCatalog = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '100%',
    paddingBottom: '20px',
});

// Catalog item

export const WrapperCatalogItem = styled('div')({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: '300px',
    gap: '10px',
    background: '#fff',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
});

export const ImageItem = styled('img')({
    display: 'block',
    width: '100%',
    height: '40%',
    objectFit: 'contain',
});

export const DescriptionItem = styled('div')({
    width: '100%',
    marginTop: '20px',
    fontWeight: 'bold',
});

export const LinkItem = styled(Link)({
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
    transition: 'all 0.3s',
    '&:hover': {
        color: 'red',
    },
});

export const PriceItem = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: '1.4rem',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
});
