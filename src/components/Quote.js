import React from 'react'
import '../components/Quote.css'

function Quote(props) {
    return (
        <div>
            <h3 className="quote" id="quote" style={{color:props.color}}>{props.text}</h3>
        </div>
    )
}

export default Quote
