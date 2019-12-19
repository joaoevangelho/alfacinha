import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import Card from "react-bootstrap/Card";
=======
>>>>>>> 5bc324ab79f23746a05a60fc1d494fa32f0f5c23
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import { loadUserInformation as loadUserInformationService } from "./../../services/authentication";

import "./style.css";

class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
    // console.log(this.state.user);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    // const id = this.props.user._id;
    // console.log("SHOW ME THE IDDDD", id);
    try {
      const user = await loadUserInformationService(id);
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
      this.props.history.push("/error/404");
    }
  }

  render() {
    const user = this.state.user;
    // console.log("SHOW ME THE PROPS", this.props.user._id);
    // const id = this.props.match.params.id;
    const userFavorites = this.state.user.favorites;
    // console.log("favorites", userFavorites);
    return (
      <div className="MinPageHeight my-5 mx-5 justify-content-center UserProfileBg">
        {(user && (
          <Container>
            <Row className="mb-5">
              <Col
                sm={9}
                className="d-flex justify-content-end align-items-end"
              >
                <h1 className="text-right">{user.name}</h1>
              </Col>
              <Col
                sm={3}
                className="d-flex justify-content-end align-items-end"
              >
                <Image
                  fluid
                  src={user.image}
                  alt="User profile pic"
                  className="UserProfileImg m-0 p-0"
                />
              </Col>
            </Row>
            <Row className="my-1">
              <Col
                sm={12}
                className="d-flex justify-content-start align-items-center"
              >
                <h4 className="text-left">About Me</h4>
              </Col>
            </Row>
            <Row className="my-1">
              <Col
                sm={12}
                className="d-flex justify-content-start align-items-center"
              >
                <p className="text-left">{user.aboutMe}</p>
              </Col>
            </Row>
            {(userFavorites.length === 0 && (
              <Fragment>
                <Row className="my-1">
                  <Col
                    sm={12}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <h4 className="text-left">My Favorites</h4>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col
                    sm={12}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <p>
                      You have no favorites yet. Browse through our lists to
                      find places you like!
                    </p>
                  </Col>
                </Row>
              </Fragment>
            )) || (
              <div>
                <Row className="my-1">
                  <Col
                    sm={12}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <h4 className="text-left">My Favorites</h4>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col
                    sm={12}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <div>
                      {userFavorites.map(userFavorite => {
                        return (
                          <div className="card" style={{ width: "10rem" }}>
                            <img
                              className="card-img-top"
                              src={userFavorite.image}
                              alt="CardPicCap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                {userFavorite.name}
                              </h5>
                              <p className="card-text">
                                {userFavorite.location}
                              </p>
                              <Link
                                className="btn btn-primary"
                                to={`/restaurant/${userFavorite.resId}`}
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            <Row className="my-1">
              <Col
                sm={12}
                className="d-flex justify-content-start align-items-center"
              >
                <Link className="btn MyBtn" to={`/user-profile/edit`}>
                  Edit Profile
                </Link>
              </Col>
            </Row>
          </Container>
        )) || ( <p>There's no user logged in...</p> )}
      </div>
    );
  }
}

export default UserProfileView;
