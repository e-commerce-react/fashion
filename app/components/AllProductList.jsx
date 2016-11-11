import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class AllProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    'imgUrl': 'seeds/female-accessory-1/female-accessory-1-1.jpg',
                    'category': 'accessory',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-accessory-2/female-accessory-2-1.jpg',
                    'category': 'accessory',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-accessory-3/female-accessory-3-1.jpg',
                   ' category': 'accessory',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-bag-1/female-bag-1-1.jpg',
                    'category': 'bag',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-bag-2/female-bag-2-1.jpg',
                    'category': 'bag',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-bag-3/female-bag-3-1.jpg',
                    'category': 'bag',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-bag-4/female-bag-4-1.jpg',
                    'category': 'bag',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-shoe-1/female-shoe-1-1.jpg',
                    'category': 'shoes',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-shoe-2/female-shoe-2-1.jpg',
                    'category': 'shoes',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-shoe-3/female-shoe-3-1.jpg',
                    'category': 'shoes',
                    'gender': 'female'
                },
                {
                    'imgUrl': 'seeds/female-shoe-4/female-shoe-4-1.jpg',
                    'category': 'shoes',
                    'gender': 'female'
                }
            ],
            filterCategory: 'none'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        //placeholder for thunk ajax request to get a list of all products to be set to state.
    }

    handleChange (event, index, value) {
        this.setState({filterCategory: value});
    }

    render(){

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            },
            gridList: {
                display: 'flex',
                overflowY: 'auto'
            },
            customWidth: {
                width: 150
            }
        };


        return (
                    <div style={styles.root}>


                        <SelectField
                            floatingLabelText=""
                            value={this.state.filterCategory}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={"none"} primaryText="None" />
                            <MenuItem value={"accessory"} primaryText="Accessory" />
                            <MenuItem value={"bag"} primaryText="Bag" />
                            <MenuItem value={"shoe"} primaryText="Shoe" />
                        </SelectField>

                        <br />
                        <GridList style={styles.gridList} cols={5.2} cellHeight={350}>
                            {this.state.products.map((product) => (
                                <GridTile
                                    key={product.imgUrl}
                                    title="[product name]"
                                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}

                                >
                                    <img src={product.imgUrl}/>
                                </GridTile>

                            ))}

                        </GridList>
                    </div>
        )
    }
}