import React, { Component } from 'react';
import ProductDetailContainer from './ProductDetailContainer';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationChevronLeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';


const raisedButtonStyle = {
  margin: 5,
  padding: 0
};



export default class ProductDetail extends Component {

  render () {

    const { product } = this.props;

    return (
      <div>
        <br />

      <div className="row">
        <div className="col-xs-offset-2 col-xs-4 product-detail-images">
          <div className="row">
            <NavigationChevronLeftIcon />back to Main
          </div>
          <br />

          <div className="product-detail-mainImage">
            <img className="col-xs-12" src="/seeds/female-bag-3/female-bag-3-1.jpg" />
          </div>

          <div className="product-detail-thumbs">
            <img className="col-xs-3" src="/seeds/female-bag-2/female-bag-2-1.jpg" />
            <img className="col-xs-3" src="/seeds/female-bag-2/female-bag-2-2.jpg" />
            <img className="col-xs-3" src="/seeds/female-bag-2/female-bag-2-3.jpg" />
            <img className="col-xs-3" src="/seeds/female-bag-2/female-bag-2-4.jpg" />
          </div>



        </div>
        <div className="col-xs-4 product-detail-info">
          <h3>{product.name}</h3>
          <br />

          <p>color > {product.color}</p>

          <p>description ></p>
          <div className="product-detail-description">{product.description}</div>



          <br />
          <div className="product-detail-price"><h3>$ {product.price}</h3></div>

          <div>
          SELECT SIZE: 6.5 <Slider step={0.10} value={0.5} />
          QTY: <input type="number" />
          </div>



          <br />
          <div className="row">
            <RaisedButton className="col-xs-5" primary={true} style={raisedButtonStyle}><span className="letter">ADD TO BAG</span></RaisedButton>
            <RaisedButton className="col-xs-5" style={raisedButtonStyle}>ADD TO WISHLIST</RaisedButton>
          </div>


          <div className="row social-media">
            <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>

        </div>

        <div className="col-xs-2"></div>
      </div>
      </div>
    )
  }
}

