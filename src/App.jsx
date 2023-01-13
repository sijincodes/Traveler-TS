import React from 'react'
import {Navbar,Hero,Footer, Memory} from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travelerData';


function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Footer />
    </>
  )
}

export default App