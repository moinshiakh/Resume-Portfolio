import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Navigation } from './Nav';
import HeroSection from './herosection';
import TechnologySection from './technology';
import ThreeCardCarousel from './portfolio';
import ExperienceEducation from './Edu_Exp';
import ContactPage from './contact';
import Footer from './footer';






export function App() {
  
return <>
<Navigation/>
<HeroSection/>
<TechnologySection/>
<ThreeCardCarousel/>
<ExperienceEducation/>
<ContactPage/>
<Footer/>
</>


}
export default App;
