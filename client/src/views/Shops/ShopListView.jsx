import React, { Component } from "react";
import Shop from "../../components/Shop";
// import { Link } from 'react-router-dom';
import SearchInput from "../../components/SearchInput";

// import './style.css';

import { listShops } from "./../../services/shops";

class ListShopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      nameQuery: "",
      locationQuery: ""
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
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.renderShops = this.renderShops.bind(this);
  }

  async componentDidMount() {
    const shopsList = await listShops();
    this.setState({
      shops: shopsList
    });
  }

  handleOnInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  filterBySearch(shop) {
    // console.log("shop", shop);
    if (this.state.nameQuery !== "" || this.state.locationQuery !== "") {
      if (shop.name && this.state.nameQuery) {
        console.log("lalalala", shop);
        return shop.name.toLowerCase().includes(this.state.nameQuery);
      }
      if (shop.location && this.state.locationQuery) {
        return shop.location.toLowerCase().includes(this.state.locationQuery);
      }
    }
    else {
      return shop.location.toLowerCase()
    }
  }

  renderShops() {
    const shops = this.state.shops;
    console.log("whats this", shops);
    return shops
      .filter(filteredShopBySearch => this.filterBySearch(filteredShopBySearch))
      .map(shop => {
        return (
          <div>
            <Shop key={shop.name} {...shop} />
          </div>
        );
      });
  }

  render() {
    console.log("this render shops", this.renderShops());
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
