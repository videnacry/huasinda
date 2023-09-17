
import { useContext } from 'react'

import Context from '../../../context'
import './index.css'
import Box from '../../../components/styled/box'

const Workshop = () => {
    const context = useContext(Context)

    return(
        <div className='workshop-s'>
            <p>Bioedifica se especializa en la formación de profesionales en el ámbito de la edificación responsable a base del bambú.</p>
            
            <div className='article'>
            <div className="frame-green">
                    <Box fill/>
                </div>
                <a onClick={() => context.goOffer()} className='title'><h1>Taller</h1></a>
                <p className='pharagraph-right'>Conecta con la naturaleza...</p>
                <div className='black-line'>
                    <Box dark absolute fill style={{top:0}}/>
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
                <div className='link'><a onClick={() => context.goOffer()} className='btn-brown-big'>más info</a></div>
            </div>
        </div>
    )
}

export default Workshop