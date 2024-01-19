import { memo, useState } from 'react';

import { textLength } from 'utils/textLength';

import { DetailsBtn, Text } from './product/styledComponents';

interface IDescription {
    text: string;
    maxLength?: number;
}

const Description = memo(({ text, maxLength = 150 }: IDescription) => {
    const length = text.length;
    const [hidden, setHidden] = useState(false);
    const btnText = hidden ? 'hide details' : 'show details';

    const toggleDetails = () => {
        setHidden(!hidden);
    };

    return (
        <Text>
            {hidden ? (
                <>
                    <p>{text}</p>
                    {length > 150 && <DetailsBtn onClick={toggleDetails}>{btnText}</DetailsBtn>}
                </>
            ) : (
                <>
                    <p>{textLength(text, maxLength)}</p>
                    {length > 150 && <DetailsBtn onClick={toggleDetails}>{btnText}</DetailsBtn>}
                </>
            )}
        </Text>
    );
});

export default Description;
