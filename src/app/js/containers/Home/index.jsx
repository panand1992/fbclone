import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getPosts, getUserID } from './../../selectors/home';
import { createUser as createUserRequest, getAllPosts as getAllPostsRequest,
    setPostDetails as setPostDetailsRequest } from './../../actions/home';
import PostWrapper from './../../components/PostWrapper.jsx';

class Home extends Component {
    componentDidMount() {
        const { userID, createUser, getAllPosts, setPostDetails } = this.props;

        if(!userID) {
            let userName = {
                userName: "user-" + new Date().getTime()
            };
            createUser(userName);
        }
        setPostDetails({});
        getAllPosts({userID});

    }

    // componentDidUpdate() {
    //     const { getAllPosts } = this.props;

    //     getAllPosts();
    // }

    renderAllPosts = () => {
        const { posts } = this.props;
        return(
            <div>
                {
                    posts.map((post) => <PostWrapper key={post.id} postData = {post} />)
                }
            </div>
        )
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div>All Posts</div>
                        {   
                            posts.length > 0 ? (
                                this.renderAllPosts()
                            ) : (
                                <div>No Posts</div>
                            )
                        }
                        <Link to={"/post/create"} className="button">Create Post</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createUser: (data) => dispatch(createUserRequest(data)),
    getAllPosts: (data) => dispatch(getAllPostsRequest(data)),
    setPostDetails: (data) => dispatch(setPostDetailsRequest(data))
});

const mapStateToProps = createStructuredSelector({
    userID: getUserID(),
    posts: getPosts()
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);