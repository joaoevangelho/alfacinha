import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameQuery: "",
      locationQuery: "",
      averageQuery: ""
    };
  }

  componentDidMount() {
    console.log("PROPS SEARCH ", this.props);
    this.setState({
      nameQuery: this.props.nameQuery,
      locationQuery: this.props.locationQuery,
      averageQuery: this.props.averageQuery
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="name-form">
                    Name
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                    className="form-input"
                    name="nameQuery"
                    type="search"
                    id="name-form"
                    placeholder="Name"
                    value={this.props.nameQuery}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="location">
                    Location
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                    className="form-input"
                    type="search"
                    id="location"
                    name="locationQuery"
                    placeholder="Location"
                    value={this.props.locationQuery}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="average">
                    Average Cost
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <input
                    className="form-input"
                    type="number"
                    id="average"
                    name="averageQuery"
                    value={this.props.averageQuery}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
