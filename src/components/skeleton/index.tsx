import { FC } from 'react';
import { Loadingskeleton } from './styles';

type props = {
    width: string,
    height: string
}

const ImageSkeleton: FC<props> = ({ width, height }) => {
    return <Loadingskeleton width={width} height={height} />;
};
export default ImageSkeleton;
