import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import './config/ReactotronConfig';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxToastr
      timeOut={5000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
      confirmOptions={{
        okText: 'Ok',
        cancelText: 'Cancel',
      }}
    />
  </Provider>,
  document.getElementById('root')
);
