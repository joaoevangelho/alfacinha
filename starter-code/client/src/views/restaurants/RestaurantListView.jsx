import React, { Component } from "react";
import { listRestaurants } from "../../services/restaurantZomato";
import { Link } from "react-router-dom";

class RestaurantListView extends Component {
  constructor() {
    super();
    this.state = {
      vegetarianRestaurants: null
    };
  }

  async componentDidMount() {
    try {
      const vegetarianRestaurants = await listRestaurants();
      this.setState({
        vegetarianRestaurants
      });
    } catch (error) {
      console.log(error);
      console.log("Error in service.");
    }
  }

  render() {
    const vegRestaurants = this.state.vegetarianRestaurants;
    console.log(vegRestaurants);
    return (
      <div className="d-flex flex-wrap">
        {vegRestaurants &&
          vegRestaurants.map(restaurant => (
            <div
              key={restaurant.restaurant.id}
              className="card mb-3"
              style={{ maxWidth: "540px" }}
            >
              <div className="row no-gutters">
                <div className="BgHack col-md-4">
                  <img
                    src={restaurant.restaurant.featured_image}
                    className="card-img"
                    alt="Image"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.restaurant.name}</h5>
                    <p className="card-text">
                      {restaurant.restaurant.cuisines}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Contact: {restaurant.restaurant.phone_numbers}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <Link to="/restaurants/1" className="page-link" size="sm">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/2" className="page-link" size="sm">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/3" className="page-link" size="sm">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/4" className="page-link" size="sm">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link to="/restaurants/5" className="page-link" size="sm">
                  5
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default RestaurantListView;

// import React, { Component, Fragment } from "react";
// import { render } from "react-dom";
// import { listRestaurants } from "../../services/restaurantZomato";
// import request from "superagent";
// import debounce from "lodash.debounce";

// class InfiniteUsers extends Component {
//   constructor(props) {
//     super(props);

//     // Sets up our initial state
//     this.state = {
//       vegetarianRestaurants: null,
//       error: false,
//       hasMore: true,
//       isLoading: false,
//       users: []
//     };

//     // Binds our scroll event handler
//     window.onscroll = debounce(() => {
//       const {
//         loadRestaurants,
//         state: { error, isLoading, hasMore }
//       } = this;

//       // Bails early if:
//       // * there's an error
//       // * it's already loading
//       // * there's nothing left to load
//       if (error || isLoading || !hasMore) return;

//       // Checks that the page has scrolled to the bottom
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         loadRestaurants();
//       }
//     }, 100);
//   }

//   componentWillMount() {
//     // Loads some users on initial load
//     this.loadRestaurants();
//   }

//   loadRestaurants = () => {
//     this.setState({ isLoading: true }, () => {
//       request
//         .get(listRestaurants)
//         .then(results => {
//           // Creates a massaged array of user data
//           const nextRestaurants = results.body.results.map(user => ({
//             email: user.email,
//             name: Object.values(user.name).join(" "),
//             photo: user.picture.medium,
//             username: user.login.username,
//             uuid: user.login.uuid
//           }));

//           // Merges the next users into our existing users
//           this.setState({
//             // Note: Depending on the API you're using, this value may
//             // be returned as part of the payload to indicate that there
//             // is no additional data to be loaded
//             hasMore: this.state.users.length < 100,
//             isLoading: false,
//             users: [...this.state.users, ...nextRestaurants]
//           });
//         })
//         .catch(err => {
//           this.setState({
//             error: err.message,
//             isLoading: false
//           });
//         });
//     });
//   };

//   render() {
//     const { error, hasMore, isLoading, users } = this.state;

//     return (
//       <div>
//         <h1>Infinite Users!</h1>
//         <p>Scroll down to load more!!</p>
//         {users.map(user => (
//           <Fragment key={user.username}>
//             <hr />
//             <div style={{ display: "flex" }}>
//               <img
//                 alt={user.username}
//                 src={user.photo}
//                 style={{
//                   borderRadius: "50%",
//                   height: 72,
//                   marginRight: 20,
//                   width: 72
//                 }}
//               />
//               <div>
//                 <h2 style={{ marginTop: 0 }}>@{user.username}</h2>
//                 <p>Name: {user.name}</p>
//                 <p>Email: {user.email}</p>
//               </div>
//             </div>
//           </Fragment>
//         ))}
//         <hr />
//         {error && <div style={{ color: "#900" }}>{error}</div>}
//         {isLoading && <div>Loading...</div>}
//         {!hasMore && <div>You did it! You reached the end!</div>}
//       </div>
//     );
//   }
// }

// const container = document.createElement("div");
// document.body.appendChild(container);
// render(<InfiniteUsers />, container);

// export default InfiniteUsers;
