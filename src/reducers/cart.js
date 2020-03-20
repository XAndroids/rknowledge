//为了避免actionType重复，所以一般会把actonType放在一个文件里面统一进行管理，也可以避免写错action
import actionType from '../actions/actionType'

const initState = [{
    id: 1,
    title: 'Apple',
    price: 888,
    count: 10
}, {
    id: 2,
    title: 'Orange',
    price: 666,
    count: 20
}];

//创建购物车的reduer，reduer的固定写法是两个参数，一个就是state并由一个初始值，第二个是action
export default (state = initState, action) => {
    //根据不同的actionType，做不同的处理，每次返回一个新的state，返回的类型一样
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1
                }
                return item
            });
        case actionType.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count -= 1
                }
                return item
            });
        //一定要有default，actionType不对的时候，就不做任何处理，返回上一次的state
        default:
            return state
    }
}
