import React, { Component } from 'react';
import { Link } from 'react-router';

import { GridList } from 'material-ui/GridList';
import ProductsTile from './ProductsGridTile';
import Subheader from 'material-ui/Subheader';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%'
  }

};

export default class ProductsGridList extends Component {

  render () {
    const { products } = this.props;

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
          cols={4}
        >
        <Subheader>Products - All products  FILTER COMES HERE!</Subheader>

        {products.map((product) => (
          <span key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductsTile singleTile={product}/>
            </Link>
          </span>
        ))}

        </GridList>
      </div>

    )
  }
}