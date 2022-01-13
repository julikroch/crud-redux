import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showProducts } from "../actions/productActions"
import Product from "./Product"

const Products = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const loadProducts = () => dispatch(showProducts())
        loadProducts()
    }, [])

    const products = useSelector((state: any) => state.products.products)
    const error = useSelector((state: any) => state.products.error)
    const loading = useSelector((state: any) => state.products.loading)

    return (
        <>
            <h2 className="text-center my-5">Product List</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">An error happened</p> : null}
            {loading ? <p>Loading ...</p> : null}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0 ? "There's no products available" : (
                            products.map((product) => (
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Products
