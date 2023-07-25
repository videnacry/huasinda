
import './module.css'
import navModule from './nav-module'

const Module = ({data=navModule, bgHole='white', isLeft=false}) => {
    return(
        <div className={`nav_module ${!isLeft||'inverse'}`}>
            <div className='line-hole' style={{backgroundColor: bgHole}}></div>
            <div className={`card-module ${!data.colored||'colored'}`}>
                <div className='img-author'>Imagen de <a href="https://pixabay.com/es/users/charlesrondeau-1458430/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1018808">Charles Rondeau</a> en <a href="https://pixabay.com/es//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1018808">Pixabay</a></div>
                <h1><a href={''}>{data.title}</a></h1>
                <hr/>
                <div className='options'>
                    <button className='btn-black'><a href={''}>{data.blackBtn.text}</a></button>
                    <button className='btn-green'>+<data.greenBtn.svg height='1em' width='auto' fill='white'/></button>
                </div>
            </div>
        </div>
    )
}

export default Module