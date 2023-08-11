
import './modal.css'

const videoActive = {
    remain:undefined, 
    video:undefined, 
    unactive(){
    document.getElementById(this.remain)?.classList.remove('active')
    document.getElementById(this.video)?.classList.remove('active')
    },
    active(remainId, videoId){
        this.remain=remainId
        this.video=videoId
    }
}
const setActive = (idRemain, idVideo) => {
    videoActive.unactive()
    videoActive.video = idRemain
    document.getElementById(idRemain).classList.toggle('active')
    videoActive.remain = idVideo
    document.getElementById(idVideo).classList.toggle('active')
}
const Modal = ({elements=[], selectedIdx=0, closeHandler=()=>{}}) => {


    return (
        <div className="modal-videos-c-s">
            <div className='viewer'/>
            <button className='close' onClick={closeHandler}>&times;</button>
            <nav className='carousel'>
                {elements.map((el, idx) => 
                
                <div className='card'  key={`${idx} youtube video webinars`}>
                    {idx==selectedIdx&&videoActive.active(`${idx}-carrousel-remain`, `${idx}-carrousel-video`)}
                    <div id={`${idx}-carrousel-video`} className={`video ${idx==selectedIdx&&'. active'}`}>
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