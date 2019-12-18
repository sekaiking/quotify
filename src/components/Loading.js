import React from 'react'
import loadingSvg from '../assets/loading.svg'

export default function index() {
    let iconStyle = {
        // position: 'absolute',
        margin: '20px auto',
        // left: 0,
        // right: 0,
        // bottom: 0,
        height: '100px'
    }
    return (
        <div className="center">
            <span>
                We are looking for a quote...
            </span>
            <br />
            <img className="fadeIn" style={iconStyle} src={loadingSvg} alt="loading" />
        </div>
    )
}
