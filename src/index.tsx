import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import { Reset } from 'styled-reset';
import '@material/react-text-field/dist/text-field.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import store from './redux/store';

render(
    <StrictMode>
        <Provider store={store}>
            <Reset />
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);

