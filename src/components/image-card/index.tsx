import { FC, useEffect, useState } from 'react';
import { Card, Title } from './styled';
import { imageCardProps } from '../../types/imageCardProps';
import { ImageSkeleton } from '../index';


const ImageCard: FC<imageCardProps> = ({ url, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = url;
        imageLoader.onload = () => setImageLoaded(true);
    }, [url]);
    return (
        <>
            {imageLoaded ?
                (
                    <Card url={url}>
                        <Title>{title}</Title>
                    </Card>
                ) :
                (
                    <ImageSkeleton width={'90px'} height={'90px'} />
                )
            }
        </>
    );
};

export default ImageCard;
