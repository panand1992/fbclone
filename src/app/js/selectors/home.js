import { createSelector } from 'reselect';
const selectHome = (state) => state;

export const getUserID = () => createSelector(selectHome, (appState) => appState.get('userID'));

export const getPosts = () => createSelector(selectHome, (appState) => appState.get('allPosts').toJS());

export const getPostDetailsData = () => createSelector(selectHome, (appState) => appState.get('postDetails').toJS());

export const getAddPostStatus = () => createSelector(selectHome, (appState) => appState.get('addPostStatus'));
