import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostWrapper extends Component {
    render() {
        const { postData } = this.props;

        return (
            <div className="postWrapper">
                <div>
                    <div>Posted By: </div>
                    <div>{postData.postedBy}</div>
                </div>
                <div>
                    {postData.content}
                </div>
                <div>
                    <Link to={"/post/details/" + postData.id} className="button">View</Link>
                    <Link to={"/post/edit/" + postData.id} className="button">Edit</Link>
                </div>
            </div>
        )
    }
}

export default PostWrapper;