import { SET_AT_LAST, SET_IMAGE_LIST, SET_LOADING, SET_PAGE_NUMBER, SET_SEARCH_STRING, SET_SELECTED_ITEM, SET_SHOW_MODAL } from "./IMSTypes"

export const setImagesList = (data) => ({
    type: SET_IMAGE_LIST,
    payload: data
})

export const setSearchString = (data) => ({
    type: SET_SEARCH_STRING,
    payload: data
})

export const setPageNumber = (data) => ({
    type: SET_PAGE_NUMBER,
    payload: data
})

export const setAtLast = (data) => ({
    type: SET_AT_LAST,
    payload: data
})

export const setLoading = (data) => ({
    type: SET_LOADING,
    payload: data
})

export const setShowModal = (data) => ({
    type: SET_SHOW_MODAL,
    payload: data
})

export const setSelectedItem = (data) => ({
    type: SET_SELECTED_ITEM,
    payload: data
})