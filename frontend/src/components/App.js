import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} // each time the state of a component is changed, the component automatically refreshes
  }

  render() {
    return ( // need the div because return can only give a single parent HTML element
        <div>
            <HomePage />
        </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App name="Henry"/>, appDiv);