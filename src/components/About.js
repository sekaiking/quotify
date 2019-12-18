import React from 'react'

export default function About() {
    return (
        <div>
            <span>about</span>
            <p style={{ fontSize: "1.2em", margin: "20px auto", maxWidth: "90%", textAlign: "left", lineHeight: "1.7em" }}>
                Welcome to Quotify, <br />
                Quotify is a client side application to diplay random tech quotes supplied by this<a target="_blank" rel="noopener noreferrer" href="http://quotes.stormconsultancy.co.uk/random.json"> public api</a><br />
                This was made by <a target="_blank" rel="noopener noreferrer" href="https://github.com/afaithraf">Ashraf</a><br />
                <br />
                    Feel free to use <a target="_blank" rel="noopener noreferrer" href="https://github.com/afaithraf/quotify">Source code</a> 
                <br />
                MIT License | Copyright (c) 2019 Ashraf<br />
            </p>
        </div>
    )
}
