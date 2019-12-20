import React, { Component, Fragment } from "react";
//import Shop from '../../components/Shop';
import { listShops } from "./../../services/shops";
import CommentList from "./../Comments/CommentList";
import MapBox from "./../../components/MapBox";
import Button from "react-bootstrap/Button";

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
                <Fragment>
                  <div className="SingleRestaurantCard card my-3 mx-4 p-0 no-gutters col-md-6 d-flex justify-content-center">
                    {/* <div className="row no-gutters"> */}
                    {/* <div className="col-md-6"> */}
                    <div>
                      <div className="card-body">
                        <h5 className="card-title">{shop.name}</h5>
                        <img
                          src={shop.image}
                          fluid
                          className="card-image SingleRestImg m-0 p-0"
                          alt="..."
                        />

                        <p className="card-text">Address: {shop.location}</p>
                        <p className="card-text">Contact: {shop.contacts}</p>

                        {user && (
                          <div>
                            {(this.state.update && (
                              <Button
                              // onClick={event => {
                              //   this.removeFromFavoritesButton();
                              // }}
                              // className="btn MyBtn"
                              >
                                Remove from Favorites
                              </Button>
                            )) || (
                              <Button
                                // onClick={event => {
                                //   this.addToFavoritesButton(
                                //     event,
                                //     shop.name
                                //   );

                                className="btn MyBtn"
                              >
                                Add to Favorites
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="col-md-6 mx-2 my-3">
                    <MapBox
                      className="SingleRestMap ml-5"
                      lat="38.529287"
                      lng="-9.144255"
                    />
                    {user && <CommentList {...this.props} />}
                  </div>
                </Fragment>
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
