const React = require('react');
const Product = require('./Product');
const Data = require('../data');
let productsData = Data.products;

let Products = React.createClass({
    render () {
    	let children = [];
        for (let id in productsData) {
        	children.push(<Product key={id} product={productsData[id]}/>);
        }
        return (
        	<div className="products">
        	    {children}
            </div>
        );
    }
});

module.exports = Products;