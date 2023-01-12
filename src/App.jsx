import React from 'react'
import {Navbar,Hero,Footer} from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travelerData';


function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Footer />
    </>
  )
}

export default App