import { FC, useState } from 'react';
import { Restaurant, RestaurantAdress, RestaurantInfo, RestaurantPhoto, RestaurantTitle } from './styled';
import { ImageSkeleton } from '../index';
import ReactStars from 'react-stars';
import fakePhoto from '../../assets/restaurante-fake.png';

const RestaurantCard: FC<any> = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <>
                <RestaurantInfo>
                    <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                    <ReactStars count={5} value={restaurant.rating} half edit={false} color1={'#e771c'} />
                    <RestaurantAdress>{restaurant.vicinity || restaurant.formatt_address}</RestaurantAdress>
                </RestaurantInfo>
                <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : fakePhoto}
                                 alt='Foto do Restaurante'
                                 onLoad={() => setImageLoaded(true)}
                                 isLoaded={imageLoaded}
                />
                {!imageLoaded && <ImageSkeleton width={'100px'} height={'100px'} />}
            </>
        </Restaurant>
    );

};
export default RestaurantCard;
