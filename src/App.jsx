import React from 'react'
import {Navbar,Hero,Footer, Memory, Explore,Advertisement} from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travelerData';


function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title={'Explore the beautiful places of the World'}placesAPI={placesAPI}/>
      <Advertisement brands={brands} />
      <Footer />
    </>
  )
}

export default App