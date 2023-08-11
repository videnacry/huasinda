import { useCallback, useState } from "react"

const getPropsInstance = () => {
    const model = {
            elements:[],
            tag:{
                element:'div',
                class:''
            },
            arrowLeft:{
                content:'',
                class:''
            },
            arrowRight:{
                content:'',
                class:''
            }
        }
    return model
}
const Carousel = ({props=getPropsInstance()}) => {

    const [elements, setElements] = useState(props.elements)
    const nextElement = useCallback(() => {
        setElements(prev => {
            const elements = [...prev]
            const first = elements.shift()
            return [...elements, first]
        })
    })
    const prevElement = useCallback(() => {
        setElements(prev => {
            const elements = [...prev]
            const last = elements.pop()
            return [last, ...elements]
        })
    })

    return (
        <props.tag.element className={props.tag.class}>
            <button className={props.arrowLeft.class} onClick={prevElement}>
                {props.arrowLeft.content}
            </button>
            {elements}
            <button className={props.arrowRight.class} onClick={nextElement}>
                {props.arrowRight.content}
            </button>
        </props.tag.element>
    )
}

export {getPropsInstance, Carousel}