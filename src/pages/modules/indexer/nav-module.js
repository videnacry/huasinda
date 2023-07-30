import { ReactComponent as svgCart } from './cart.svg'

const navModule = {
    colored:false,
    title:'',
    blackBtn:{
        text:'info',
        clickHandler:()=>{console.log('hi')}
    },
    greenBtn:{
        svg:svgCart,
        clickHandler:()=>{}
    }
}

export default navModule