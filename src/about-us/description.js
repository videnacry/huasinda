import './description.css'

const Description = (props) => {

    return(
        <div className='description-s'>
            <h1 className='title'>{props.title}</h1>
            <p className='description'>{props.description}</p>
            <div className='space'></div>
        </div>
    )
}

export default Description;