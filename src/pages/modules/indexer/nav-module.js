import { ReactComponent as svgCart } from './cart.svg'

const navModule = {
    colored:false,
    title:'',
    blackBtn:{
        text:'info',
        clickHandler:()=>{console.log('hi')},
        isVisible: true
    },
    greenBtn:{
        svg:svgCart,
        clickHandler:()=>{},
        isVisible: true
    }
}

export default navModule