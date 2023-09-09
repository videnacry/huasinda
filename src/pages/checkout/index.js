import chalkImgSrc from './chalk.webp'
import './index.css'
let hadStarted = false
const Checkout = () => {
    console.log('ber')
    if (!hadStarted) {
        hadStarted = true
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.className = 'checkout-p'
        div.id = 'checkout-p-id'
        div.innerHTML = `
        <div class='chalkboard'></div>
        <img src=${chalkImgSrc} alt='chalk img' class='chalk'/>
        <div class='text'>
            <button class="close" onclick='document.getElementById("checkout-p-id").classList.add("hide")'>&times;</button>
            <h1 class='title'>Reserva tu cupo!</h1>
            <h4 class='msg'>Manda un whattsap o llama al:</h4>
            <ul class='nums'>
                <li><a href='tel:+593 96 138 5672'>TEL: +593 96 138 5672</a></li>
                <li><a href='tel:+593 99 993 0538'>TEL: +593 99 993 0538</a></li>
            </ul>
        </div>
        `
    } else document.getElementById("checkout-p-id").classList.remove("hide")
}

export default Checkout