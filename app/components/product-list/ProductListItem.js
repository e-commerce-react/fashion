import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';

export default class ProductsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {displayPrice: false};
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver () {
    this.setState({displayPrice: !this.state.displayPrice})
  }

  render() {
    return (
      <GridTile
        key={this.props.productListItem.id}
        title={this.state.displayPrice ? this.props.productListItem.name : ''}
        titlePosition='top'
        subtitle={this.state.displayPrice ? `$ ${this.props.productListItem.price}` : ''}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOver}
        titleBackground='transparent'
      >
        <img src={this.props.productListItem.imageUrl[0]} />
      </GridTile>
    )
  }
}