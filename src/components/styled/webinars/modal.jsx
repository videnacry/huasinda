
import './modal.css'

const videoActive = {remain:undefined, video:undefined, unactive(){
    this.video?.classList.remove('active')
    this.remain?.classList.remove('active')
}}
const setActive = (idRemain, idVideo) => {
    videoActive.unactive()
    videoActive.video = document.getElementById(idRemain)
    videoActive.video.classList.toggle('active')
    videoActive.remain = document.getElementById(idVideo)
    videoActive.remain.classList.toggle('active')
}
const Modal = ({elements=[], selectedIdx=0, closeHandler=()=>{}}) => {


    return (
        <div className="modal-videos-c-s">
            <div className='viewer'/>
            <button className='close' onClick={closeHandler}>&times;</button>
            <nav className='carousel'>
                {elements.map((el, idx) => 
                <div className='card'>

                    <div id={`${idx}-carrousel-video`} className={`video ${idx==selectedIdx&&'. active'}`} key={`${idx} youtube video webinars`}>
                        <iframe 
                        width="100%" 
                        height="100%" 
                        src={el.youtube} 
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        >
                        </iframe>
                    </div>
                    
                    <div 
                        id={`${idx}-carrousel-remain`} 
                        className={`remaining ${idx==selectedIdx&&'. active'}`} 
                        key={`${idx} remaining webinars carrosel`}
                        onClick={() => setActive(`${idx}-carrousel-remain`,`${idx}-carrousel-video`)}
                    />
                </div>
                )}
            </nav>
        </div>
    )
}

export default Modal