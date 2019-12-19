import React, { Component } from 'react';
import Shop from '../../components/Shop';
import { Link } from 'react-router-dom';
import './style.css';

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
    console.log('whats this', shops);

    return shops.map(shop => {
      return (
        <div>
          <Shop key={shop.name} {...shop} />
        </div>
      );
    });
  }
}

export default ListShopView;
