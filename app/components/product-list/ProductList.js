import React from 'react';
import { Link } from 'react-router';
import ProductListContainer from './ProductListContainer';
import ProductListItem from './ProductListItem';
import { GridList } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowDropUpIcon from 'material-ui/svg-icons/navigation/arrow-drop-up';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: '6%',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  gridList: {
    width: '100%',
    height: '100%'
  },
  subHeader: {
    width: '100%',
    lineHeight: '40%',
    fontSize: '0.8em',
    marginBottom: '1.3%',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '0',
  }
};


export default ({ products }) => (
  <div style={styles.root}>

    <div className="row between-xs" style={styles.subHeader}>
      <p className="col-xs-3">men > new arrivals</p>
      <p className="col-xs-3" style={{textAlign: 'right'}}>filter by > view all</p>
    </div>

    <GridList
      cellHeight={300}
      style={styles.gridList}
      cols={4}
    >
    {
      products.map((product) => (
        <span key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductListItem productListItem={product}/>
          </Link>
        </span>
      ))
    }
    </GridList>

    <IconButton tooltip="GOTO TOP" tooltipPosition="top-center">
      <ArrowDropUpIcon viewBox='0 0 24 24' className="product-list-goto-top" />
    </IconButton>

  </div>
)


