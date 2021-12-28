import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <Link to={'/'}>
                <h1>CRUD - React, Redux, REST API & Axios</h1>
            </Link>

            <Link
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
                to={'/products/new'}
            >Agregar producto &#43;</Link>
        </nav>
    )
}

export default Header
