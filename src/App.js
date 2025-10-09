import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Navigation } from './Nav';
import HeroSection from './herosection';
import TechnologySection from './technology';
import ThreeCardCarousel from './portfolio';


export function App() {
  
return <>
<Navigation/>
<HeroSection/>
<TechnologySection/>
<ThreeCardCarousel/>
</>


}
export default App;
