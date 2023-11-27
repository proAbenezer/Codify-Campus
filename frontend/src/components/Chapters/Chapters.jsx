import React from 'react'
import { useParams } from 'react-router-dom'


//Chapter Styles
import './Chapters.css'
function Chapters() {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='chapters'>
            <h1>Hi I'm Chapter {id}</h1>
        </div>
    )
}

export default Chapters