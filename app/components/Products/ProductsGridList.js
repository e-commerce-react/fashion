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

const products = [
  {
    img: 'seeds/female-accessory-1/female-accessory-1-1.jpg',
    title: 'eyewear',
    price: '$355',
  },
  {
    img: 'seeds/female-accessory-2/female-accessory-2-1.jpg',
    title: 'trick',
    price: '$310',
  },
  {
    img: 'seeds/female-accessory-3/female-accessory-3-1.jpg',
    title: 'trick',
    price: '$480',
  },
  {
    img: 'seeds/female-bag-1/female-bag-1-1.jpg',
    title: 'prada bibliothèque bag',
    price: '$3,080',
  },
  {
    img: 'seeds/female-bag-2/female-bag-2-1.jpg',
    title: 'prada bibliothèque bag',
    price: '$3,080',
  },
  {
    img: 'seeds/female-bag-3/female-bag-3-1.jpg',
    title: 'prada pionnière bag',
    price: '$1,940',
  },
  {
    img: 'seeds/female-bag-4/female-bag-4-1.jpg',
    title: 'prada corsaire bag',
    price: '$1,990',
  },
  {
    img: 'seeds/female-shoe-1/female-shoe-1-1.jpg',
    title: 'sandal',
    price: '$890',
  },
  {
    img: 'seeds/female-shoe-2/female-shoe-2-1.jpg',
    title: 'pump',
    price: '$850',
  },
  {
    img: 'seeds/female-shoe-3/female-shoe-3-1.jpg',
    title: 'lace-up',
    price: '$950',
  },
  {
    img: 'seeds/female-shoe-4/female-shoe-4-1.jpg',
    title: 'sandal',
    price: '$1,450',
  },
  {
    img: 'seeds/male-accessory-1/male-accessory-1-1.jpg',
    title: 'backpack',
    price: '$5,169.99',
  },
  {
    img: 'seeds/male-accessory-2/male-accessory-2-1.jpg',
    title: 'trick',
    price: '$480',
  },
  {
    img: 'seeds/male-accessory-3/male-accessory-3-1.jpg',
    title: 'keychain',
    price: '$480',
  },
  {
    img: 'seeds/male-accessory-4/male-accessory-4-1.jpg',
    title: 'linea rossa eyewear',
    price: '$480',
  },
  {
    img: 'seeds/male-shoe-1/male-shoe-1-1.jpg',
    title: 'sneaker',
    price: '$650',
  },
  {
    img: 'seeds/male-shoe-2/male-shoe-2-1.jpg',
    title: 'lace-up',
    price: '$1,070',
  },
  {
    img: 'seeds/male-shoe-3/male-shoe-3-1.jpg',
    title: 'buckle',
    price: '$1,250',
  },
];



export default class Products extends Component {

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
          cols={4}
        >
        <Subheader>Products - All products  FILTER COMES HERE!</Subheader>

        {products.map((product) => (
          <Link to={`/products/${product.title}`}>
            <ProductsTile key={product.img} singleTile={product}/>
          </Link>
        ))}

        </GridList>
      </div>
    )
  }
}
