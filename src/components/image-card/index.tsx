import { FC } from 'react';
import { Card, Title } from './styled';
import { imageCardProps } from '../../types/imageCardProps';


const ImageCard: FC<imageCardProps> = ({ url, title }) => {
    return (
        <Card url={url}>
            <Title>{title}</Title>
        </Card>
    );
};

export default ImageCard;
