import React, { Component } from "react";
import { Link } from "react-router-dom";

class CommentWrapper extends Component {
    render() {
        const { commentData } = this.props;

        return (
            <div className="commentWrapper">
                <div>
                    <div>Posted By: </div>
                    <div>{commentData.postedBy}</div>
                </div>
                <div>
                    {commentData.content}
                </div>
                <div>
                    <div>Like Comment</div>
                    <div>Edit Comment</div>
                </div>
            </div>
        )
    }
}

export default CommentWrapper;