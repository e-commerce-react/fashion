import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const tilesData = [
  {
    img: 'seeds/female-accessory-1/female-accessory-1-1.jpg',
    title: 'eyewear',
    author: 'jill111',
  },
  {
    img: 'seeds/female-accessory-2/female-accessory-2-1.jpg',
    title: 'trick',
    author: 'pashminu',
  },
  {
    img: 'seeds/female-accessory-3/female-accessory-3-1.jpg',
    title: 'trick',
    author: 'pashminu',
  },
  {
    img: 'seeds/female-bag-1/female-bag-1-1.jpg',
    title: 'prada bibliothèque bag',
    author: 'Danson67',
  },
  {
    img: 'seeds/female-bag-2/female-bag-2-1.jpg',
    title: 'prada bibliothèque bag',
    author: 'fancycrave1',
  },
  {
    img: 'seeds/female-bag-3/female-bag-3-1.jpg',
    title: 'prada pionnière bag',
    author: 'Hans',
  },
  {
    img: 'seeds/female-bag-4/female-bag-4-1.jpg',
    title: 'prada corsaire bag',
    author: 'fancycravel',
  },
  {
    img: 'seeds/female-shoe-1/female-shoe-1-1.jpg',
    title: 'sandal',
    author: 'jill111',
  },
  {
    img: 'seeds/female-shoe-2/female-shoe-2-1.jpg',
    title: 'pump',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'seeds/female-shoe-3/female-shoe-3-1.jpg',
    title: 'lace-up',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'seeds/female-shoe-4/female-shoe-4-1.jpg',
    title: 'sandal',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'seeds/male-accessory-1/male-accessory-1-1.jpg',
    title: 'backpack',
    author: 'jill111',
  },
  {
    img: 'seeds/male-accessory-2/male-accessory-2-1.jpg',
    title: 'trick',
    author: 'pashminu',
  },
  {
    img: 'seeds/male-accessory-3/male-accessory-3-1.jpg',
    title: 'keychain',
    author: 'pashminu',
  },
  {
    img: 'seeds/male-accessory-4/male-accessory-4-1.jpg',
    title: 'linea rossa eyewear',
    author: 'pashminu',
  },
  {
    img: 'seeds/male-shoe-1/male-shoe-1-1.jpg',
    title: 'sneaker',
    author: 'pashminu',
  },
  {
    img: 'seeds/male-shoe-2/male-shoe-2-1.jpg',
    title: 'lace-up',
    author: 'pashminu',
  },
  {
    img: 'seeds/male-shoe-3/male-shoe-3-1.jpg',
    title: 'buckle',
    author: 'pashminu',
  },
];


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {displayPrice: false};
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver () {
    this.setState({displayPrice: true})
  }

  render() {
    return (
    <div style={styles.root}>
    <GridList
      cellHeight={300}
      style={styles.gridList}
      cols={4}
    >
      <Subheader>Products</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          title={this.state.displayPrice ? tile.title : ''}
          onMouseEnter={this.handleMouseOver}
        >
          <img src={tile.img} />
        </GridTile>

      ))}
    </GridList>
  </div>
  )
  }
}



//
// subtitle={<span><b>{tile.author}</b></span>}




// <div style={styles.root}>
//     <GridList
//       cellHeight={300}
//       style={styles.gridList}
//       cols={4}
//     >
//       <Subheader>Products</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//           title={toggleDisplayPrice(tile)}
//           onMouseEnter={(e) => {
//             e.preventDefault();
//             tile.displayPrice = true;
//             toggleDisplayPrice(tile);
//             console.log(tile);
//           }}
//           onMouseLeave={(e) => {
//             e.preventDefault();
//             tile.displayPrice = false;
//             toggleDisplayPrice(tile);
//             console.log(tile);
//           }}
//         >
//           <img src={tile.img} />
//         </GridTile>

//       ))}
//     </GridList>
//   </div>