import React from 'react'
import {Navbar,Hero,Footer, Memory, Explore,Advertisement, Pricing, Banner} from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travelerData';


function App() {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title={'Explore the beautiful places of the World'}placesAPI={placesAPI}/>
      <Advertisement brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI}/>
      <Footer />
    </>
  )
}

export default App