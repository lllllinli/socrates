import React from 'react';
import ReactDom from 'react-dom';
import App from './js/App';
import './styles.scss';

const { document } = window;

const wrapper = document.getElementById('root');
if (wrapper) {
  ReactDom.render(<App />, wrapper);
}
