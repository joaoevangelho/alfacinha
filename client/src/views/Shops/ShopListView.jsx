import React, { Component } from "react";
import Shop from "../../components/Shop";
import { Link } from "react-router-dom";

import { listShops } from "./../../services/shops";

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
    console.log("whats this", shops);

    return (
      <div>
        <h1>Shop List</h1>
        <div className="product-list">
          {shops.map(shop => {
            return (
              <div>
                <Shop key={shop.name} {...shop} />
                <Link to={`/shop-list/${shop.name}`}>
                  <h5 className="card-title">{shop.name}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListShopView;
