import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getPostDetailsData, getUserID } from '../../selectors/home';
import { addReaction as addReactionRequest, addComment as addCommentRequest, getPostDetails as getPostDetailsRequest } from '../../actions/home';
import CommentWrapper from "./../../components/CommentWrapper.jsx";
import AddCommentWrapper from "./../../components/AddCommentWrapper.jsx";

class PostDetails extends Component {
	componentDidMount() {
		const { getPostDetails, userID } = this.props;

		getPostDetails({postId: this.props.match.params.id, userId: userID});
	}

	likeFn = (data) => {
		const { addReaction, userID } = this.props;

		addReaction({refId: data, userId: userID, isActive: true});
    }

    unlikeFn = (data) => {
		const { addReaction, userID } = this.props;

		addReaction({refId: data, userId: userID, isActive: false});
    }
    
    addComment = (data) => {
        const { addComment, postDetails, userID } = this.props;

		addComment({
            refId: postDetails.id,
            commentText: data,
            userId: userID
        });
    }

    renderAllComments = () => {
        const { postDetails } = this.props;

        return (
            <div>
                {
                    postDetails.comments.map((comment) => (
                        <CommentWrapper
                            commentData = {comment}
                            addComment = {this.addComment}
                            addReaction = {this.likeFn}
                        />
                    ))
                }
            </div>
        )
    }

	render() {
		const { postDetails } = this.props;

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="addPostWrapper">
							<h4 className="text-center">Post Details</h4>
                            <div>
                                <div>Posted By: </div>
                                <div>{postDetails.postedBy}</div>
                            </div>
							<div>{postDetails.content}</div>
                            <div>Likes: {postDetails.likes}</div>
                            {
                                postDetails.userLike ? (
                                    <div onClick={() => this.likeFn(postDetails.id)}>Unlike Post</div>
                                ) : (
                                    <div onClick={() => this.unlikeFn(postDetails.id)}>Like Post</div>
                                )
                            }
							<div>All Comments</div>
                            {
                                postDetails.comments && postDetails.comments.length > 0 ? (
                                    this.renderAllComments()
                                ) : (
                                    <div>No Comments</div>
                                )
                            }
                            <AddCommentWrapper
                                addComment = {this.addComment}
                            />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
    addReaction: (data) => dispatch(addReactionRequest(data)),
    getPostDetails: (data) => dispatch(getPostDetailsRequest(data)),
    addComment: (data) => dispatch(addCommentRequest(data))
});

const mapStateToProps = createStructuredSelector({
    userID: getUserID(),
	postDetails: getPostDetailsData()
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
