import React, { Component } from 'react';
//import Shop from '../../components/Shop';
import { listShops } from './../../services/shops';

class SingleShopView extends Component {
  constructor() {
    super();
    this.state = {
      shop: []
    };

    listShops()
      .then(shops => {
        const shopName = this.props.match.params.name;
        let oneShop = shops.filter(item => item.name === shopName);
        this.setState({
          shop: oneShop
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const shopName = this.props.match.params.name;
    const shop = this.state.shop;
    //const location = this.state.shop;
    //console.log('lcoation ->', location);
    //console.log('shop info', shop);
    console.log('check props', this.props);
    console.log('check if shop-->', this.state.shop);

    return (
      <div>
        {shop && (
          <div>
            {shop.map(shop => {
              return (
                <ul key={shop.name}>
                  <h1>Single Product</h1>
                  <img src={shop.image} alt="img" />
                  <h1>{shop.name}</h1>
                  <h1>{shop.location}</h1>
                  <h1>{shop.contacts}</h1>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SingleShopView;
