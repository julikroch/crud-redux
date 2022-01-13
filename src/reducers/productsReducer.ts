import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    SHOW_PRODUCTS,
    SHOW_PRODUCTS_SUCCESS,
    SHOW_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETED_PRODUCT_SUCCESS,
    DELETED_PRODUCT_ERROR
} from '../types/index'

type initialStateT = {
    products: string[]
    error: null
    loading: boolean
    productToDelete: null
}

export const initialState: initialStateT = {
    products: [],
    error: null,
    loading: false,
    productToDelete: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SHOW_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case SHOW_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case SHOW_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productToDelete: action.payload
            }
        default:
            return state
    }
}