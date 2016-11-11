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
    // console.log(this.props.singleTile);

    return (
      <GridTile
        key={this.props.singleTile.id}
        title={this.state.displayPrice ? this.props.singleTile.name : ''}
        titlePosition='top'
        subtitle={this.state.displayPrice ? this.props.singleTile.price : ''}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOver}
        titleBackground='transparent'
      >
        <img src={this.props.singleTile.imageUrl[0]} />
      </GridTile>
    )
  }
}