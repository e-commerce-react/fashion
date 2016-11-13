import React, { Component } from 'react';
import { Link } from 'react-router';
import ProductDetailContainer from './ProductDetailContainer';
import NavigationChevronLeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';


const raisedButtonStyle = {
  margin: 5,
  padding: 0
};

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {displayImage: ''};
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({displayImage: nextProps.product.imageUrl[0]})
  }

  handleMouseClick (imgUrl) {
    this.setState({displayImage: imgUrl})
  }

  render() {
    return (
      <div>
    <br />
    <div className="row">
      <div className="col-xs-offset-2 col-xs-4 product-detail-images">

        <div className="row"><Link to="/products" style={{textDecoration: "none"}}><NavigationChevronLeftIcon className="svg-icons" /> back to Main</Link></div>

        <br />
        <div className="product-detail-mainImage">
          {
            this.props.product.imageUrl ? <img className="col-xs-12" src={this.state.displayImage} /> : ''
          }

        </div>

        <div className="product-detail-thumbs">
          {
            this.props.product.imageUrl ? this.props.product.imageUrl.map((imgUrl, idx ) => (
              <img
                key={idx} src={imgUrl}
                onClick={() => this.handleMouseClick(imgUrl)}
                className="col-xs-3"
              />
            )) : ''
          }
        </div>
      </div>

      <div className="col-xs-4 product-detail-info">
        <h3>{this.props.product.name}</h3>
        <br />

        <p>color > {this.props.product.color}</p>

        <p>description ></p>
        <div className="product-detail-description">{this.props.product.description}</div>



        <br />
        <div className="product-detail-price"><h3>$ {this.props.product.price}</h3></div>

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
