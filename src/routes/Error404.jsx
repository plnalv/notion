import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div>
            <h1>404</h1>
            <h3>Page not found</h3>
            <Link to="/">
                <p>Go back to the main page</p>
            </Link>
        </div>
    )
}
