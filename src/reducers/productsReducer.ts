import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    SHOW_PRODUCTS,
    SHOW_PRODUCTS_SUCCESS,
    SHOW_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETED_PRODUCT_SUCCESS,
    DELETED_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    EDITED_PRODUCT_SUCCESS,
    EDITED_PRODUCT_ERROR
} from '../types/index'

type initialStateT = {
    products: string[]
    error: null
    loading: boolean
    productToDelete: null
    productToEdit: null
}

export const initialState: initialStateT = {
    products: [],
    error: null,
    loading: false,
    productToDelete: null,
    productToEdit: null
}

export default function (state = initialState, action: any) {
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
        case DELETED_PRODUCT_ERROR:
        case SHOW_PRODUCTS_ERROR:
        case EDITED_PRODUCT_ERROR:
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
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productToDelete: action.payload
            }
        case DELETED_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter((product: any) => product.id !== state.productToDelete),
                productToDelete: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productToEdit: action.payload
            }
        case EDITED_PRODUCT_SUCCESS:
            return {
                ...state,
                productToEdit: null,
                products: state.products.map((product: any) => product.id === action.payload.id ? product = action.payload : product)
            }
        default:
            return state
    }
}