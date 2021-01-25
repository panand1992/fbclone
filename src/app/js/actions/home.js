import { GET_ALL_POSTS, CREATE_USER, CREATE_POST, EDIT_POST, ADD_COMMENT, EDIT_COMMENT, ADD_REACTION,
	SET_ADD_POST_STATUS, 
	GET_POST_DETAILS,
	SET_POST_DETAILS} from './../constants/home';

export const createUser = (data) => ({
	type: CREATE_USER,
	data
});

export const createPost = (data) => ({
	type: CREATE_POST,
	data
});

export const getAllPosts = (data) => ({
	type: GET_ALL_POSTS,
	data
});

export const editPost = (data) => ({
	type: EDIT_POST,
	data
});

export const addComment = (data) => ({
	type: ADD_COMMENT,
	data
});

export const editComment = (data) => ({
	type: EDIT_COMMENT,
	data
});

export const addReaction = (data) => ({
	type: ADD_REACTION,
	data
});

export const setPostStatus = (data) => ({
	type: SET_ADD_POST_STATUS,
	data
});

export const getPostDetails = (data) => ({
	type: GET_POST_DETAILS,
	data
});

export const setPostDetails = (data) => ({
	type: SET_POST_DETAILS,
	data
})
