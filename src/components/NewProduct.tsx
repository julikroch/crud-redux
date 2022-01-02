import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProductAction } from '../actions/productActions'

type Product = {
    name: string
    price: number
}

const NewProduct = ({ history }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()

    const loading = useSelector((state: any) => state.products.loading)
    const error = useSelector((state: any) => state.products.error)

    const addProduct = (product: Product) => dispatch(createNewProductAction(product))

    const submitNewProduct = (e) => {
        e.preventDefault()
        if (name.trim() === '' || price <= 0) return
        addProduct({ name, price })
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center b-4 font-weight-bold">Add product</h2>
                        <form
                            onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Product Name'
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Product Price</label>
                                <input type="number"
                                    className='form-control'
                                    placeholder='Product Price'
                                    name='price'
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >Add</button>
                        </form>
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className='alert alert-danger p2 mt-4 text-center'>An error happened</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
