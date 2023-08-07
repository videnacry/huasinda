import navModule from '../nav-module'
import './index.css'

const IndexerMogile = ({modules=[{...navModule}], close = ()=>{console.log('closing modale')}}) => {

    return(
        <div className="modules_indexer-mobile">
            <button className="close" onClick={close}>&times;</button>
            <ul className="modules">
                {
                    modules.map((data, idx) => 

                        <li className="module">
                            <h2 className="title">{data.title}</h2>        
                            {data.blackBtn.isVisible&&<button className='btn-black' onClick={data.blackBtn.clickHandler}>{data.blackBtn.text}</button>}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default IndexerMogile