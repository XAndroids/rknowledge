//在实际的项目中，由于只有单一的store，但是状态会有很多分类，所以我们要划分reducer，createStore参数只接受一个
//reducer，所以，redux比较聪明的提供了一个合并多个reduer的方法，注意不要手动合并
import {combineReducers} from 'redux'

//引入cart reducer，如果有多个，继续引入
import cart from "./cart";

//导出合并后的reduer
export default combineReducers({
    //把多个reduer做为combineReduers的对象参数传入，外部就可以通过store.getState().cart来获取到cartReducer里面的state
    cart
})
