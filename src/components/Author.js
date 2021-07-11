import React from 'react'
import '../components/Author.css'

function Author(props) {
    return (
        <div>
            <h5 className="author" id="author" style={{color:props.color}}>- {props.name}</h5>
        </div>
    )
}

export default Author
