import { FC, FormEvent, KeyboardEvent, useState } from 'react';
import { Carousel, CarouselTitle, Container, Logo, Search, Wrapper, WrapperMap } from './styles';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { Settings } from 'react-slick';
import fakePhoto from '../../assets/restaurante-fake.png';
import { Card, ImageSkeleton, Loader, MapContainer, Modal, RestaurantCard } from '../../components';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


const Home: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [placeId, setPlaceId] = useState<null | string>(null);

    const typedSelector: TypedUseSelectorHook<any> = useSelector;
    const rest = typedSelector(state => state);
    const restaurants = rest.restaurants.restaurants;
    const restaurantSelected = rest.restaurants.restaurantSelected;
    const handleOpenModal = (Id: string) => {
        setPlaceId(Id);
        setModalOpened(true);
    };

    const handleKeyPress = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    };

    const CarouselSettings: Settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };
    const SelectedDetails = () => {
        return (
            !restaurantSelected ? (
                    <>
                        <ImageSkeleton width={'10px'} height={'10px'} />
                        <ImageSkeleton width={'10px'} height={'10px'} />
                        <ImageSkeleton width={'10px'} height={'10px'} />
                        <ImageSkeleton width={'10px'} height={'10px'} />
                        <ImageSkeleton width={'10px'} height={'10px'} />
                    </>
                ) :
                (
                    <>
                        <p>{restaurantSelected?.name}</p>
                        <p>{restaurantSelected?.formatted_phone_number}</p>
                        <p>{restaurantSelected?.formatted_address}</p>
                        <p>{restaurantSelected?.name}</p>
                        <p>{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado'}</p>
                    </>
                )
        );

    };
    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt='Logo do restaurante' />
                    <TextField
                        label='Pesquisar Restaurantes'
                        //onTrailingIconSelect={() => setInputValue(e: '' )}
                        trailingIcon={<MdSearch size={'2em'} />}
                    ><Input
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...CarouselSettings}>
                        {
                            restaurants.length <= 0 ? <Loader /> : restaurants.map((rest: any, index: number) => (
                                <Card key={index}
                                      url={rest.photos ? rest.photos[0].getUrl() : fakePhoto} title={rest.name} />
                            ))
                        }
                    </Carousel>
                </Search>
                {
                    restaurants.length > 0 && restaurants.map((rest: any) => <RestaurantCard
                        onClick={() => handleOpenModal(rest.place_id)} restaurant={rest} />)
                }
            </Container>
            <WrapperMap>
                <MapContainer placeId={placeId} query={query} map={undefined} marker={undefined} />
            </WrapperMap>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                <SelectedDetails />
            </Modal>
        </Wrapper>
    );
};

export default Home;
