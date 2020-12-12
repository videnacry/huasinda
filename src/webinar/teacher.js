import React from 'react'
import './teacher.css'

const Teacher = (props) => {

    return(
        <section class="teacher-c">
            <article class="text">
                <h1>**TALLERISTA**</h1>
                {props.teachers.map(teacher => (
                    <p>{teacher}</p>
                ))}
            </article>
            <button className='btn'>Comprar</button>
        </section>
    )
}

export default Teacher