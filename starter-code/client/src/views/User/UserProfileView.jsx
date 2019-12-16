import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
              <Card.Title className="mx-2">About Me <small>({user.username})</small></Card.Title>
              <Card.Text className="mx-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="mx-2 text-muted"><small>Last updated {user.creationDate}</small></Card.Text>
            </Card>
          </div>
        )) || <p>There's no user logged in...</p>}
      </div>
    );
  }
}

export default UserProfileView;
