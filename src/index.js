import React from 'react';
import ReactDom from 'react-dom';
import App from './js/App';
import './styles.scss';

const wrapper = document.getElementById('root');
wrapper ? ReactDom.render(<App />, wrapper) : false;
