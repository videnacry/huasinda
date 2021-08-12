import React from 'react'
import {Link} from 'react-router-dom'
import './teacher.css'

const Teacher = (props) => {

    return(
        <section class="teacher-c">
            <article class="text">
                <h3>**Tallerista**</h3>
                {props.teachers.map(teacher => (
                    <p>{teacher}</p>
                ))}
            </article>
            <Link to="/checkout" className="btn">Comprar</Link>
        </section>
    )
}

export default Teacher