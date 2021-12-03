import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from '@/store';
import '@/styles/index.scss';

import RoutesComponents from '@/routes';

render((
  <Provider store={store}>
    <RoutesComponents />
  </Provider>
), document.getElementById('root'))