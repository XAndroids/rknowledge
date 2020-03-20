//createStore是redux提供的一个用于创建store的方法
import {createStore} from 'redux'
//引入全合并后的reducer
import rootReducer from './reducers'
//createStore的第一个参数必须一个reducer，如果是多个，在reduces目录下先使用combineReducers合并后再导出
export default createStore(rootReducer)
