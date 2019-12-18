import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id="footer">
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/404">404</Link>
                <a target="_blank"  rel="noopener noreferrer" href="https://github.com/afaithraf/Quotify">Github</a>
            </nav>
            <div className="info">
                made by <a target="_blank"  rel="noopener noreferrer" href="https://github.com/afaithraf">Ashraf</a> | Quotify 2020
            </div>
        </footer>
    )
}
