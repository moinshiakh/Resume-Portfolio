import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Navigation } from './Nav';
import HeroSection from './herosection';
import TechnologySection from './technology';
import ThreeCardCarousel from './portfolio';
import ExperienceEducation from './Edu_Exp';


export function App() {
  
return <>
<Navigation/>
<HeroSection/>
<TechnologySection/>
<ThreeCardCarousel/>
<ExperienceEducation/>
</>


}
export default App;
