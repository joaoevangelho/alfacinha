import React, { Component } from 'react';
import Shop from '../../components/Shop';

import { listShops } from './../../services/shops';

class ListShopView extends Component {
  constructor() {
    super();
    this.state = {
      shops: []
    };
    listShops()
      .then(shops => {
        this.setState({
          shops: shops
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const shops = this.state.shops;
    return (
      <div>
        <h1>Shop List</h1>
        <div className="product-list">
          {shops.map(shop => {
            return <Shop key={shop.name} {...shop} />;
          })}
        </div>
      </div>
    );
  }
}

export default ListShopView;
