import React from 'react'
import logo from '../assets/logo.png';

export default function Navbar(props) {
    return (
        <div id="navbar">
            <div className="content">
                <div className="logo">
                    <img src={logo} height="36px" alt="Quotify logo" />
                </div>
                <div className="searchBar">
                    <button onClick={props.onGenerate}>Generate</button>
                    {/* <input type="text" placeholder="type a topic here" /> */}
                </div>
            </div>
        </div>
    )
}
