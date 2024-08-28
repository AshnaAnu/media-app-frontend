import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//Add Video API Call => post method => localhost:3000/allVideos
export const addVideoAPI = async (reqBody) => {
    return await commonAPI('post', `${serverURL}/allVideos`, reqBody)
}


//get all videos API Call from json-server => post =>localhost:3000/allVideos
export const getVideoAPI = async () => {
    return await commonAPI('get', `${serverURL}/allVideos`, {})
}

//get a particular video from json-server => get =>localhost:3000/allVideos:id
export const getAvideo = async (id) => {
    return await commonAPI('get', `${serverURL}/allVideos/${id}`, {})
}

//delete a video from json-server =>delete =>localhost:3000/allVideos

export const deleteVideoAPI = async (id) => {
    return await commonAPI('delete', `${serverURL}/allVideos/${id}`, {})
}

//add history API Call =>post=>localhost:3000/watchHistory

export const addHistoryAPI = async (videoDetails) => {
    return await commonAPI('post', `${serverURL}/watchHistory`, videoDetails)
}


//get history API Call =>get=>localhost:3000/watchHistory
export const getHistoryAPI = async () => {
    return await commonAPI('get', `${serverURL}/watchHistory`, {})
}

//Delete history API Call =>delete
export const deleteHistoryAPI = async (id) => {
    return await commonAPI('delete', `${serverURL}/watchHistory/${id}`, {})
}

//add category API Call =>post=>localhost:3000/category
export const addCategoryAPI = async (category) => {
    return await commonAPI('post', `${serverURL}/category`, category)
}

//get category API Call =>get=>localhost:3000/category
export const getCategoryAPI = async () => {
    return await commonAPI('get', `${serverURL}/category`, {})
}

//delete category API Call => delete =>localhost:3000/category
export const deleteCategoryAPI = async (id) => {
    return await commonAPI('delete', `${serverURL}/category/${id}`, {})
}

//update category API Call => put =>localhost:3000/category

export const updateCategoryAPI = async (id, category) => {
    return await commonAPI('put', `${serverURL}/category/${id}`, category)
}

