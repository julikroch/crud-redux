import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProductAction, getProductToEdit } from '../actions/productActions'

const Product = ({ product }) => {
    const { name, price, id } = product

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteProductConfirmation = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductAction(id))
            }
        })
    }

    const redirectEdition = product => {
        dispatch(getProductToEdit(product))
        history.push(`/products/edit/${id}`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'>{price}</span></td>
            <td className='acciones'>
                <button
                    type='button'
                    onClick={() => redirectEdition(product)}
                    className='btn btn-primary mr-2'
                >Edit</button>
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
