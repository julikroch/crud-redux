import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL
} from '../types/index'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct())
        try {
            await axiosClient.post('/products', product)
            dispatch(addProductSuccess(product))
            Swal.fire(
                'Correct',
                'Product added successfully',
                'success'
            )
        } catch (error) {
            console.log({error})
            dispatch(addProductFailed(product))
            Swal.fire({
                icon: error,
                title: 'Error',
                text: 'An error happened, try again'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductFailed = state => ({
    type: ADD_PRODUCT_FAIL,
    payload: state
})