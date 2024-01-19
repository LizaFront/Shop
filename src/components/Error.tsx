import { memo } from 'react';
import { Title } from 'assets/styles/global.styles';

const ErrorMessage = memo(() => {
    return <Title>Opps! Something going wrong....</Title>;
});

export default ErrorMessage;
