import React, { Component } from 'react';
//import Shop from '../../components/Shop';
import { listShops } from './../../services/shops';
import CommentList from './../Comments/CommentList';
import MapBox from './../../components/MapBox';

class SingleShopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
      user: this.props.user
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
    // const shopName = this.props.match.params.name;
    const shop = this.state.shop;
    const user = this.state.user;
    //const location = this.state.shop;
    //console.log('lcoation ->', location);
    //console.log('shop info', shop);
    // console.log('check props', this.props);
    // console.log('check if shop-->', this.state.shop);

    return (
      <div>
        {shop && (
          <div>
            {shop.map(shop => {
              return (
                // <ul key={shop.name}>
                //   <h1>Single Product</h1>
                //   <img src={shop.image} alt="img" />
                //   <h1>{shop.name}</h1>
                //   <h1>{shop.location}</h1>
                //   <h1>{shop.contacts}</h1>
                // </ul>
                <div className="SingleRestaurantCard card m-5 p-5">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={shop.image}
                        className="card-img"
                        alt="Shop Green"
                      />
                      <MapBox
                        className="mt-5"
                        lat="38.729287"
                        lng="-9.144255"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{shop.name}</h5>
                        <p className="card-text">Address: {shop.location}</p>
                        <p className="card-text">Contact: {shop.contacts}</p>
                        {user && (
                          <div>
                            {(this.state.update && (
                              <i
                                // onClick={event => {
                                //   this.removeFromFavoritesButton();
                                // }}
                                className="btn MyBtn"
                              >
                                Remove from Favorites
                              </i>
                            )) || (
                              <i
                                // onClick={event => {
                                //   this.addToFavoritesButton(event, shop.name);
                                // }}
                                className="btn MyBtn"
                              >
                                Add to Favorites
                              </i>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div>
          {user && <CommentList {...this.props} />}
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default SingleShopView;
