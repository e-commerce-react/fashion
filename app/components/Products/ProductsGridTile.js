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
    let tile = this.props.singleTile;

    return (
        <GridTile
          key={tile.img}
          title={this.state.displayPrice ? tile.title : ''}
          titlePosition='top'
          subtitle={this.state.displayPrice ? tile.price : ''}
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOver}
          titleBackground='transparent'
        >
          <img src={tile.img} />
        </GridTile>
  )
  }
}