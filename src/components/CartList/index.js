import React, {Component} from 'react';
//connect方法执行之后是一个高阶组件
import {connect} from 'react-redux'

//导入actionCreators
import {increment, decrement} from '../../actions/cart'

class CardList extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>商品名称</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.cartList.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={this.props.increment.bind(this, item.id)}>+</button>
                                    <span>{item.count}</span>
                                    <button onClick={this.props.decrement.bind(this, item.id)}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

//mapStateToProps，这里的state实际上就是store.getState()的值
const mapState = (state) => {
    return {
        cartList: state.cart
    }
};

//connect方法由四个参数，常用的就前面两个
//第一个参数是mapStateToProps，作用就是从store里state注入到当前组件的props上
//第二个参数可以是mapDispatchToProps，这个的主要作用是把action生成的方法注入到当前组件的props上，一般来说没必要这样用
//直接第二个参数传递一个对象，这里面的对象就是actionCreators，只要传入了actionCreators，在组件内就通过
//this.props.actionCreator来调用，这样的话，在调用后，那个actionCreator就会自动帮助你把内部的action dispatch出去
export default connect(mapState, {increment, decrement})(CardList);
