
const Data = require('../data');
const Ps = require("perfect-scrollbar");

let cartData = Data.cartItems;

let Cart = React.createClass({
    componentDidMount () {
        let cart = React.findDOMNode(this.refs.cart);
        Ps.initialize(cart);
    },
    render () {
        let children = [];
        for (let item in cartData) {
          children.push(<CartItem key={cartData[item].id} cartItem={cartData[item]}/>);
        }
        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" ref="cart">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {children}
                </div>
            </div>
        );
    }
});

module.exports = Cart;