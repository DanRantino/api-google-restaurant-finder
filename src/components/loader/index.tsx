import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';
import { FC } from 'react';

const Loader: FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (<Lottie options={defaultOptions} />);

};
export default Loader;
