import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// this is essentially a switch loop for URLS
		// the component thing is the component object that is rendered on the webpage - you can see the "extends Component" for the object
		return (
			<Router>
				<Routes>
					<Route path="/">
						<p>This is the homepage</p>
					</Route>
					<Route path="/join" element={RoomJoinPage} />
					<Route path="/create" element={CreateRoomPage} />
				</Routes>
			</Router>
		);
	}
}
