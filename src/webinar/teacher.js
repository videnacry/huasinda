import React, { useContext } from 'react'
import './teacher.css'
import Context from '../context'

const Teacher = (props) => {

    const context = useContext(Context)

    return(
        <section class="teacher-c">
            <article class="text">
                <h3>**Tallerista**</h3>
                {props.teachers.map(teacher => (
                    <p>{teacher}</p>
                ))}
            </article>
            <a onClick={() => context.goCheckout()} className="btn">Comprar</a>
        </section>
    )
}

export default Teacher