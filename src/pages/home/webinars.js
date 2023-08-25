
import { useContext } from 'react'

import Context from '../../context'
import './webinars.css'

const Webinars = () => {
    const context = useContext(Context)

    return(
        <div className='webinars-s'>
            <p>Aquaterra se especializa en la formación de profesionales en el ámbito de la edificación responsable a base del bambú.</p>
            <div className='article'>
                <a onClick={() => context.goOffer()} className='title'><h1>Taller</h1></a>
                <p className='pharagraph-right'>Conecta con la naturaleza...</p>
                <div className='black-line'>
                    <div className='frame-center'>
                        <div className='white'/>
                    </div>
                    <div className='frame-center'>
                        <b className='text'>Ecodomo</b>
                        <p className='text'>
                            Reduce la huella de CO2!
                        </p>
                    </div>
                    <div className='frame-center'>
                        <b className='text'>Paisaje acuático</b>
                        <p className='text'>
                            Reutiliza el agua!
                        </p>
                    </div>
                    <div className='frame-left'>
                        <div className='img-left'/>
                    </div>
                    <div className='frame-right'>
                        <div className='img-right'/>
                    </div>
                </div>
                <p className='pharagraph-left'>...comparte con el mundo!!</p>
                <div className='link'><a onClick={() => context.goOffer()} className='btn-green'>más info</a></div>
            </div>
        </div>
    )
}

export default Webinars