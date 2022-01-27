import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { editProductAction } from "../actions/productActions"

type Product = {
    name: string
    price: number
}

const EditProduct = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [editProduct, setEditProduct] = useState<Product>({
        name: '',
        price: 0
    });

    const product = useSelector((state: any) => state.products.productToEdit)

    const onChangeForm = (e: any) => {
        setEditProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const submitEditProduct = (e: any) => {
        e.preventDefault()

        dispatch(editProductAction(editProduct))
        history.push('/')
    }

    useEffect(() => {
        setEditProduct(product)
    }, [product]);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center b-4 font-weight-bold">Edit product</h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Product Name'
                                    name='name'
                                    value={editProduct?.name}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Product Price</label>
                                <input type="number"
                                    className='form-control'
                                    placeholder='Product Price'
                                    name='price'
                                    value={editProduct?.price}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                onClick={submitEditProduct}
                            >Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
