import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUserID, getAddPostStatus } from '../../selectors/home';
import { createPost as createPostRequest, setPostStatus as setPostStatusRequest } from '../../actions/home';

class EditPost extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		postContent: "",
	// 		onlyMe: 0
	// 	};
	// }

	// componentDidUpdate() {
	// 	const { addPostStatus, history, setPostStatus } = this.props;

	// 	if(addPostStatus) {
	// 		setPostStatus(false);
	// 		history.push('/');
	// 	}
	// }

	// onSubmit = () => {
	// 	const { createPost, userID } = this.props;
	// 	const { postContent, onlyMe } = this.state;

	// 	if (postContent === "") {
	// 		alert("post empty");
	// 	} else {
	// 		const data = {
	// 			postContent,
	// 			userID,
	// 			onlyMe
	// 		};

	// 		createPost(data);
	// 	}
	// }

	// updatePostContent = (e) => {
	// 	this.setState({ postContent: e.target.value });
	// }

	// updateOnlyMe = (e) => {
	// 	this.setState({ onlyMe: e.target.value });
	// }

	render() {
		// const { postContent, onlyMe } = this.state;

		return (
			<div>
				{/* <div className="container">
					<div className="row">
						<div className="addPostWrapper">
							<h4 className="text-center">Add Post</h4>
							<div className="form-group">
								<textarea
									// type="text"
									className="form-control"
									// placeholder="Post Content"
									value={postContent}
									onChange={this.updatePostContent}
								></textarea>
							</div>
							<div className="form-group">
								Share with Only Me - 
								<input
									type="checkbox"
									className="form-control"
									value={onlyMe}
									onChange={this.updateOnlyMe}
								/>
							</div>
							<div className="form-group">
								<input
									type="submit"
									className="form-control"
									value="Submit"
									onClick={this.onSubmit}
								/>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	// createPost: (data) => dispatch(createPostRequest(data)),
	// setPostStatus: (data) => dispatch(setPostStatusRequest(data))
});

const mapStateToProps = createStructuredSelector({
	// userID: getUserID(),
	// addPostStatus: getAddPostStatus()
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
