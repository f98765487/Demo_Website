import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Page from './pages'
import './App.css'

function App() {
    return (
        <div className="App">
            <h1>Welcome to the demo website</h1>
            <Routes>
                <Route path="/" element={<Page.Home />}></Route>
                <Route path="product" element={<Page.Product />}>
                    <Route path=":id" element={<Page.ProductDetail />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
