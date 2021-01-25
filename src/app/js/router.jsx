import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./containers/Home/index.jsx"));
const AddPost = lazy(() => import("./containers/Posts/AddPost.jsx"));
const PostDetails = lazy(() => import("./containers/Posts/PostDetails.jsx"));
// const EditPost = lazy(() => import("./containers/Posts/EditPost.jsx"));

class Customrouter extends Component {
	render() {
		return (
			<Router>
				<Suspense fallback={<div className="loader"></div>}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/post/create" component={AddPost} />
						<Route exact path="/post/details/:id" component={PostDetails} />
						{/* <Route exact path="/post/edit/:id" component={EditPost} /> */}
					</Switch>
				</Suspense>
			</Router>
		);
	}
}

export default Customrouter;
