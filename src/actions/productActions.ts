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
    EDITED_PRODUCT_ERROR,
    EDITED_PRODUCT_SUCCESS,
    GET_PRODUCT_EDIT,
    START_PRODUCT_EDITION
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
            console.log(error)
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

export function showProducts() {
    return async (dispatch: any) => {
        dispatch(downloadProducts())
        try {
            setTimeout(async () => {
                const response = await axiosClient.get('/products')
                dispatch(downloadProductsSuccess(response.data))
            }, 2500);
        } catch (error) {
            console.log(error)
            dispatch(downloadProductsFailed())
        }
    }
}

const downloadProducts = () => ({
    type: SHOW_PRODUCTS,
    payload: true
})

const downloadProductsSuccess = products => ({
    type: SHOW_PRODUCTS_SUCCESS,
    payload: products
})

const downloadProductsFailed = () => ({
    type: SHOW_PRODUCTS_ERROR,
    payload: true
})

export function deleteProductAction(id: number) {
    return async (dispatch: any) => {
        dispatch(getDeletedProduct(id))
        try {
            await axiosClient.delete(`/products/${id}`)
            dispatch(deleteProductSuccessfully())
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch(deleteProductError())
        }
    }
}

const getDeletedProduct = (id: number) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
})

const deleteProductSuccessfully = () => ({
    type: DELETED_PRODUCT_SUCCESS
})

const deleteProductError = () => ({
    type: DELETED_PRODUCT_ERROR,
    payload: true
})

export function getProductToEdit(product: any) {
    return (dispatch) => {
        dispatch(getProductEditAction(product))
    }
}

const getProductEditAction = (product: any) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})

export function editProductAction(product: any) {
    return async (dispatch: any) => {
        dispatch(editProduct())
        try {
            await axiosClient.put(`/products/${product.id}`, product)
            dispatch(editProductSuccess(product))
        } catch (error) {
            dispatch(editProductError())
        }
    }
}

const editProduct = () => ({
    type: START_PRODUCT_EDITION
})

const editProductSuccess = (product: any) => ({
    type: EDITED_PRODUCT_SUCCESS,
    payload: product
})

const editProductError = () => ({
    type: EDITED_PRODUCT_ERROR,
    payload: true
})