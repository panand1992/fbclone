import React, { Component } from "react";

class AddCommentWrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			commentText: ""
		};
	}

	onSubmit = () => {
		const { addComment } = this.props;
		const { commentText } = this.state;

		if (commentText === "") {
			alert("comment empty");
		} else {

			addComment(commentText);
		}
	}

	updateCommentText = (e) => {
		this.setState({ commentText: e.target.value });
	}

	render() {
		const { commentText } = this.state;

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="addPostWrapper">
							<h4 className="text-center">Add Comment</h4>
							<div className="form-group">
								<textarea
									// type="text"
									className="form-control"
									// placeholder="Post Content"
									value={commentText}
									onChange={this.updateCommentText}
								></textarea>
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
				</div>
			</div>
		);
	}
}

export default AddCommentWrapper;
