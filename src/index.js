import React from 'react';
import {render} from 'react-dom';

//Provider是react-redux提供的一个组件
import {Provider} from 'react-redux'

import App from './App';
import store from './store'

import * as serviceWorker from './serviceWorker';

render(
    //一般就直接把这个组件放在应用的最顶层，这个组件必须有一个store属性，这个store属性就是咱们创建的store
    //只要在最外层包裹了这个Provider，那么所有后代组件都可以使用Redux.connect做连接
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
