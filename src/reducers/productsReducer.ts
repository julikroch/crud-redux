import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from '../types/index'

type initialStateT = {
    products: string[]
    error: null
    loading: boolean
}

const initialState: initialStateT = {
    products: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}