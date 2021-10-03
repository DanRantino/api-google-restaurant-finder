import { FC } from 'react';
import ReactStars from 'react-stars';
import { Restaurant, RestaurantAdress, RestaurantInfo, RestaurantPhoto, RestaurantTitle } from './styled';
import restaurant from '../../assets/restaurante-fake.png';

const RestaurantCard: FC = () => {
    return (
        <Restaurant>
            <RestaurantInfo>
                <RestaurantTitle>Nome do Restaurante:</RestaurantTitle>
                <ReactStars count={5} value={4.5} half edit={false} color1={'#e771c'} />
                <RestaurantAdress>Endereço:</RestaurantAdress>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant} alt='Foto do Restaurante' />
        </Restaurant>
    );
};
export default RestaurantCard;
