import { fromJS } from 'immutable';
import { SET_USER_ID, SET_ALL_POSTS, SET_ADD_POST_STATUS, SET_POST_DETAILS } from './../constants/home';

const initialState = fromJS({
	userID: localStorage.getItem('userID'),
	allPosts: [],
	addPostStatus: false,
	postDetails: {}
});

const HomePageReduce = (state = initialState, action) => {
	switch (action.type) {
	case SET_USER_ID :
		return state
			.set('userID', fromJS(action.data));

	case SET_ALL_POSTS :
		return state
			.set('allPosts', fromJS(action.data));

	case SET_POST_DETAILS :
		return state
			.set('postDetails', fromJS(action.data));

	case SET_ADD_POST_STATUS :
		return state
			.set('addPostStatus', fromJS(action.data));

	default :
		return state;
	}
};

export default HomePageReduce;
