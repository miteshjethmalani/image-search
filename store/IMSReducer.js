import { SET_AT_LAST, SET_IMAGE_LIST, SET_LOADING, SET_PAGE_NUMBER, SET_SEARCH_STRING, SET_SELECTED_ITEM, SET_SHOW_MODAL } from "./IMSTypes";
const initialState = {
    imagesList: [],
    searchString: '',
    pageNumber: 1,
    isAtLast: false,
    isLoading: true,
    showModal: false,
    selectedItem: {}
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_LIST:
            return {
                ...state,
                imagesList: action.payload
            }
        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        case SET_AT_LAST:
            return {
                ...state,
                isAtLast: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }
        default:
            return state;
    }
}
export default taskReducer