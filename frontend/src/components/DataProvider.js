import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from 'axios';

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };


  componentDidMount() {
    let endpoint
    if (this.props.params) {
      endpoint = this.props.endpoint + `${this.props.params.match.params.id}`
    } else {
      endpoint = this.props.endpoint
    }
    console.log('ENDPOINT', endpoint)
    let token = localStorage.token
    axios({
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: "Token " + `${token}`
      }
    })
    .then( (response) => {
      if (response.status !== 200) {
        return this.setState({ placeholder: "Something went wrong" });
      }
      console.log(`Response from ${endpoint}`, response)
      return response.data
    })
    .then( (data) => this.setState({ data: data, loaded: true }));
  }


  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
export default DataProvider;
