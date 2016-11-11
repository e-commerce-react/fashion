import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import {cyan500, darkBlack} from 'material-ui/styles/colors';

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

