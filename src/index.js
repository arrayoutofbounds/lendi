import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';



const store = configureStore();

store.subscribe(() => console.log('store', store.getState()));


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));