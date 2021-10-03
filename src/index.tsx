import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import { Reset } from 'styled-reset';
import '@material/react-text-field/dist/text-field.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

render(
    <StrictMode>
        <Reset />
        <App />
    </StrictMode>,
    document.getElementById('root')
);

