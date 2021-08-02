import logo from './logo.svg';
import './App.css';
import Home from './home/Home'
import AboutUs from './about-us'
import Webinar from './webinar/Webinar'
import Projects from './projects';
import Prototype from './webinar/Prototype'
import Checkout from './checkout/Checkout'
import { BrowserRouter, Route } from 'react-router-dom'

import flood from './img/pixabay/flood.jpg'
import bamboo_village from './img/pixabay/bamboo-village.jpg'

function App() {
  const webinars = [{
    date: '22-12-2020',
    title: 'La trama que nos une, una visión desde la Permacultura',
    summery: [
      '**TEMARIO**',
      'Aspectos para definir un tipo de Cimentación.',
      'Algunos puntos críticos en el diseño y proceso de obra: zócalos,aberturas, techos, encuentros entre materiales.',
      'Grupos de sistemas constructivos: mampuestos, técnicas mixtas, muros monolíticos.'
    ],
    long_date: [
    'Lunes, 22 de Diciembre del 2020',
    'URU | ARG | CHI | BRA : 18 hs.'
    ],
    teachers: [
      'José Luis Gamboa Cárdenas'
    ],
    img: [
      flood,
      bamboo_village
    ]
  }, {
    date: '24-12-2020',
    title: 'Tacuara holística: una guía para regenerar la nave tierra',
    summery: [
      '**TEMARIO**',
      'Estructuras de madera (sistemas prefabricados)', 
      'Sistemas poste-viga - Uso de madera rolliza y aserrada.',
      'Sistemas prefabricados - Paneles, pisos y techos'
    ],
    long_date: [
    'Lunes, 22 de Diciembre del 2020',
    'URU | ARG | CHI | BRA : 18 hs.'
    ],
    teachers: [
      'José Luis Gamboa Cárdenas'
    ],
    img: [
      flood,
      bamboo_village
    ]
  }, {
    date: '26-12-2020',
    title: 'Eficiencia energética y energías renovables en la vivienda',
    summery: [
      '**TEMARIO**',
      'Muros y cubiertas autoportantes',
      'La diversidad del diseño de las bóvedas mexicanas a partir de la geometría',
      'Calefacción a leña. El estado del arte y terminaciones.',
      'Volver a la tierra, pero con el confort del siglo 21.'
    ],
    long_date: [
    'Lunes, 22 de Diciembre del 2020',
    'URU | ARG | CHI | BRA : 18 hs.'
    ],
    teachers: [
      'José Luis Gamboa Cárdenas'
    ],
    img: [
      flood,
      bamboo_village
    ]
  }, {
    date: '28-12-2020',
    title: 'Preparación de morteros y aplicaciones. Revoques grueso, fino, pinturas y mantenimiento',
    summery: [
      '**TEMARIO**',
      'Huerta y vermicompostaje, mem, círculo virtuoso de los residuos, agentes locales. redes locales',
      'Reconocimiento y selección de suelos para construir. Introducción a sistemas y técnicas constructivas con tierra ',
      'Tanque de captación de agua de lluvia y evapotranspiración.'
    ],
    long_date: [
    'Lunes, 22 de Diciembre del 2020',
    'URU | ARG | CHI | BRA : 18 hs.'
    ],
    teachers: [
      'José Luis Gamboa Cárdenas'
    ],
    img: [
      flood,
      bamboo_village
    ]
  }]
    
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/webinars'><Webinar webinars={webinars} /></Route>
        {webinars.map(webinar => (
          <Route exact path={'/' + webinar.date}><Prototype webinar={webinar}/></Route>
        ))}
        <Route exact path='/checkout'><Checkout webinars={webinars}/></Route>
        <Route exact path='/about-us'><AboutUs/></Route>
        <Route exact path='/projects'><Projects/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
