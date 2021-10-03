import { FC, FormEvent, useState } from 'react';
import { Carousel, CarouselTitle, Conatiner, Logo, Search } from './styles';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { Settings } from 'react-slick';
import restaurant from '../../assets/restaurante-fake.png';
import { Card, Modal, RestaurantCard } from '../../components';
import { Loader } from '@googlemaps/js-api-loader';

const Home: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const CarouselSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
        version: 'weekly'
    });

    return (
        <Conatiner>
            <Search>
                <Logo src={logo} alt='Logo do restaurante' />
                <TextField
                    label='Pesquisar Restaurantes'
                    //onTrailingIconSelect={() => setInputValue(e: '' )}
                    trailingIcon={<MdSearch size={'2em'} />}
                ><Input
                    value={inputValue}
                    onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)} />
                </TextField>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...CarouselSettings}>
                    <Card key={1} url={restaurant} title={'restaurante do juca'} />
                    <Card key={2} url={restaurant} />
                    <Card key={3} url={restaurant} />
                    <Card key={4} url={restaurant} />
                    <Card key={5} url={restaurant} />
                    <Card key={6} url={restaurant} />
                    <Card key={7} url={restaurant} />
                </Carousel>
                <button onClick={() => setModalOpened(!modalOpened)}>abrir</button>
            </Search>
            <RestaurantCard />
            <Modal open={modalOpened} onClose={() => setModalOpened(false)} />
        </Conatiner>);
};

export default Home;
