import { takeLatest, all, put } from 'redux-saga/effects';
import { SET_USER_ID, SET_ALL_POSTS, CREATE_USER, GET_ALL_POSTS, CREATE_POST, EDIT_POST, ADD_COMMENT,
	EDIT_COMMENT, ADD_REACTION, SET_ADD_POST_STATUS, SET_POST_DETAILS, GET_POST_DETAILS } from './../constants/home';

function* createUser(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/user/add", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		localStorage.setItem('userID', result.userId);
		yield put({ type: SET_USER_ID, data: result.userId });
	} catch (e) {
		console.log(e);
	}
}

function* getAllPosts(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/post/all", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ALL_POSTS, data: result.posts });
	} catch (e) {
		console.log(e);
	}
}

function* getPostDetails(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/post/details", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_POST_DETAILS, data: result.postDetails });
	} catch (e) {
		console.log(e);
	}
}

function* createPost(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/post/add", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ADD_POST_STATUS, data: result.success });
	} catch (e) {
		console.log(e);
	}
}

function* editPost(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/post/edit", {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ALL_POSTS, data: result.posts });
	} catch (e) {
		console.log(e);
	}
}

function* addComment(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/comment/add", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ALL_POSTS, data: result.posts });
	} catch (e) {
		console.log(e);
	}
}

function* editComment(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/comment/edit", {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ALL_POSTS, data: result.posts });
	} catch (e) {
		console.log(e);
	}
}

function* addReaction(action) {
	const { data } = action;
	try {
		const responseBody = yield fetch("/api/v1/reaction/add", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(data)
		});
		const result = yield responseBody.json();
		yield put({ type: SET_ALL_POSTS, data: result.posts });
	} catch (e) {
		console.log(e);
	}
}

export default function* appSaga() {
	yield all([yield takeLatest(CREATE_USER, createUser)]);
	yield all([yield takeLatest(CREATE_POST, createPost)]);
	yield all([yield takeLatest(EDIT_POST, editPost)]);
	yield all([yield takeLatest(ADD_COMMENT, addComment)]);
	yield all([yield takeLatest(EDIT_COMMENT, editComment)]);
	yield all([yield takeLatest(ADD_REACTION, addReaction)]);
	yield all([yield takeLatest(GET_ALL_POSTS, getAllPosts)]);
	yield all([yield takeLatest(GET_POST_DETAILS, getPostDetails)]);
}
