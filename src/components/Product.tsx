import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductAction } from '../actions/productActions'

const Product = ({ product }) => {
    const { name, price, id } = product

    const dispatch = useDispatch()

    const deleteProductConfirmation = id => {
        dispatch(deleteProductAction(id))
    }
    return (
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'>{price}</span></td>
            <td className='acciones'>
                <Link
                    to={`/products/edit/${id}`}
                    className='btn btn-primary mr-2'
                >Edit</Link>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => deleteProductConfirmation(id)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default Product
