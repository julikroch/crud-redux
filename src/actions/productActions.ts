import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from '../types/index'

export function createNewProductAction(product) {
    return () => {
        console.log({ product })
    }
}