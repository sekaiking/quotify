import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id="navbar">
            <div className="content">
                <Link className="logo" to="/">
                    <img src={logo} height="36px" alt="Quotify logo" />
                </Link>
                <div className="searchBar">
                    <Link to="/">
                        <button onClick={props.onGenerate}>Generate</button>
                    </Link>
                    {/* <input type="text" placeholder="type a topic here" /> */}
                </div>
            </div>
        </div>
    )
}
