import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import { authReducer } from './reducers/auth.reducer';
import { channelDetailsReducer } from './reducers/channnel.reducer';
import { commentListReducer } from './reducers/comments.reducer';
import { channelVideosReducer, homeVideosReducer, relatedVideoReducer, searchedVideosReducer } from './reducers/videos.reducer';
import { selectedVideoReducer, subscriptionsChannelReducer } from './reducers/videos.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer,
})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;