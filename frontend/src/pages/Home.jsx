import * as React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
        </nav>
    )
}

export default Home
