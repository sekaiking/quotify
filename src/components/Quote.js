import React from 'react'

export default function Quote(props) {
    return (
        <div className="center quote">
            <span>
                {props.quote}
            </span>
        </div>
    )
}
