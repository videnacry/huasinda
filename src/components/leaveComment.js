import React from 'react'
import Comment from './comment'
import './leaveComment.css'

const LeaveComment = () => {

    const comments = ['a', 'b', 'c']
    return(
        <div className='leave-comment-c'>
            <h2 className='title'>¡Puedes dejar un comentario!</h2>
            <p><small>Escribe tu comentario en el cuadro que contiene al botón "Enviar" y pulsa el dicho botón para dar estrellas.</small></p>
            <div className='input'>
                <textarea type='text' className='comment'></textarea>
                <button className='btn'>Enviar</button>
            </div>
            {comments.map(() => (
                <Comment/>
            ))}
        </div>
    )
}

export default LeaveComment