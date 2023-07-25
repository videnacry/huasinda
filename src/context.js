import { createContext } from "react"

import Home from './home/Home'
import AboutUs from './about-us'
import Webinar from './webinar/Webinar'
import Projects from './projects';
import Modules from './modules'
import Checkout from "./checkout/Checkout";
import modules from "./modules-info";


let links = {
    state:{}, 
    setState:()=>{},
    goHome() {this.setState(<Home />)}, 
    goOffer() {this.setState(<Webinar modules={modules}/>)}, 
    goProjects() {this.setState(<Projects/>)}, 
    goAboutUs() {this.setState(<AboutUs/>)}, 
    goCheckout() {this.setState(<Checkout modules={modules}/>)},
    goModules() {this.setState(<Modules/>)}
}

const Context = createContext(links)
export default Context