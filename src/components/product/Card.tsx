import { memo } from 'react';

import { Title, Wrapper } from 'assets/styles/global.styles';
import { Description, Image, Text, WrapperCard, Price } from './styledComponents';

import { IProduct } from 'models/product.data';

const Card = memo(({ id, title, description, image, price }: IProduct) => {
    return (
        <Wrapper>
            <WrapperCard>
                <Image src={image} alt={title} />
                <Description>
                    <Title>{title}</Title>
                    <Text>{description}</Text>
                    <Price>{`Price: ${price}$`}</Price>
                </Description>
            </WrapperCard>
        </Wrapper>
    );
});

export default Card;
