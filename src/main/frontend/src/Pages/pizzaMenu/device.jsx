import React, { Component } from "react";
import axios from "axios";

class device extends Component {
  constructor(props) {
    console.log("in constructor");
    super(props);
    this.state = {
      data: [],
    };
  }

  getMyData = async () => {
    let data = await axios.get(
      "https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/"
    );
    data = data.data.myDeviceData;
    console.log("data is " + JSON.stringify(data));
    this.setState({ data });
  };
  componentDidMount() {
    console.log("in componentDidMount");
    this.getMyData();
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("in componentWillUnmount");
  }

  render() {
    console.log("is " + JSON.stringify(this.state.data));
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {this.state.data.map((myDeviceData) => {
          return <p key={myDeviceData.key}>name : {myDeviceData.name}</p>;
        })}
      </div>
    );
  }
}

export default device;
