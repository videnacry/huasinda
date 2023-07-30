import { createContext } from "react"

import Home from '../pages/home'
import AboutUs from '../pages/about-us'
import Webinar from '../pages/webinar'
import Projects from '../pages/projects';
import Modules from '../pages/modules'
import Checkout from "../pages/checkout";

import modules from "./modules-info";


let links = {
    state:{}, 
    setState:()=>{},
    goHome() {this.setState(<Home />)}, 
    goOffer() {this.setState(<Webinar />)}, 
    goProjects() {this.setState(<Projects/>)}, 
    goAboutUs() {this.setState(<AboutUs/>)}, 
    goCheckout() {this.setState(<Checkout />)},
    goModules() {this.setState(<Modules/>)},
    modules: []
}
modules.forEach((el,idx) => {
    let moduleIdx = idx
    links.modules[idx] = {
        ...modules[idx],
        /**
         * @param {function} setState function in parent object
        */
       go(setState) {setState(<Modules moduleIdx={moduleIdx}/>)}
    }
})
const Context = createContext(links)
export default Context