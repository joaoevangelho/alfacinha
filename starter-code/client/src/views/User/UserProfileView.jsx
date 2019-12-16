import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Carousel from "react-bootstrap/Carousel";

import "./style.css";

class UserProfileView extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="MinPageHeight pt-5 m-5">
        {(user && (
          <div>
            <Card className="text-dark UserProfileCardBg">
              <Card.Img
                src="/images/shops10.jpg"
                alt="Card image"
                className="UserProfileBanner"
              />
              <Card.ImgOverlay>
                <Row>
                  <Col
                    sm={12}
                    className="d-flex justify-content-end align-items-end"
                  >
                    <h1 className="mx-3">{user.name}</h1>
                    <Image
                      fluid
                      src={user.image}
                      alt="User profile pic"
                      className="UserProfileImg m-0 p-0"
                    />
                  </Col>
                </Row>
              </Card.ImgOverlay>
              <Card.Title className="mx-4 mt-5">
                About Me <small className="text-muted">({user.username})</small>
              </Card.Title>
              <Card.Text className="mx-4">
                {user.aboutMe}
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Title className="mx-4 mt-3">My Favorites</Card.Title>
              <Card.Text className="mx-4">
                <ul>
                  <li>
                    <Link to="#">Bla {user.favorites}</Link>
                  </li>
                  <li>
                    <Link to="#">Bla {user.favorites}</Link>
                  </li>
                  <li>
                    <Link to="#">Bla {user.favorites}</Link>
                  </li>
                </ul>
              </Card.Text>
              {/* <Card.Text className="mx-4 mb-2 text-muted">
                <small>Last updated {user.creationDate}</small>
              </Card.Text> */}
            </Card>

            {/*             <Carousel className="mx-4">
              <Carousel.Item className="FavoritesCarouselHeight FavoritesCarouselBg">
                <Row>
                  <Card className="FavoritesCard d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      src="images/food1.jpg"
                      className="FavoritesImg"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="FavoritesCard d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      src="images/food1.jpg"
                      className="FavoritesImg"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                  </Card>
                  <Card className="FavoritesCard d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="top"
                      src="images/food1.jpg"
                      className="FavoritesImg"
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                  </Card>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="FavoritesCarouselHeight FavoritesCarouselBg">
                <Carousel.Caption className="text-dark">
                  <h3>Why go green?</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
        )) || <p>There's no user logged in...</p>}
      </div>
    );
  }
}

export default UserProfileView;
