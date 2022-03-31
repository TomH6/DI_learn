import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Carousel from './components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => (
    <div>
        <Carousel />
    </div>
);

render(<App />, document.getElementById('root'));

export default App;