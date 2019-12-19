import React, { Component } from 'react';
import Shop from '../../components/Shop';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';

// import './style.css';

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

  renderShops() {
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

  render() {
    return (
      <div className="MinPageHeight">
        <SearchInput {...this.state} onChange={this.handleOnInputChange} />
        <div>
          <div className="d-flex flex-wrap ml-5 mt-5">{this.renderShops()}</div>
        </div>
      </div>
    );
  }
}

export default ListShopView;
