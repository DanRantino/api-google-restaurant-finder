import { FC, FormEvent, useState } from 'react';
import { CarouselTitle, Conatiner, Logo, Search } from './styles';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import Slider, { Settings } from 'react-slick';

const Home: FC = () => {
    const [inputValue, setInputValue] = useState('');

    const CarouselSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

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
                <Slider>
                    <img />
                </Slider>
            </Search>

        </Conatiner>);
};

export default Home;
