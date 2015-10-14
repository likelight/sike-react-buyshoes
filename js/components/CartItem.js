const React = require('react');
const Data = require('../data');
const QuantityControl = require('./QuantityControl');
let products = Data.products;
let CartItem = React.createClass({
    render () {
      let {id, quantity} = this.props.cartItem;
      return (
        <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={products[id].imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
               {products[id].name}
            </div>
            <div className="cart-item__price">
               {products[id].price}
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" />
        </div> {/* cart-item__top-part */}
        <div className="cart-item__qty">
           <QuantityControl item={this.props.cartItem} variant="gray"/>
        </div>
        </div>
      );
    }
});

module.exports = CartItem;