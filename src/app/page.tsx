import React from 'react'
import Hero from './components/Hero'
import BrowseSection from './components/BrowseSection'
import Products from './components/Products'
import Explore from './components/Explore'
import ShareImage from './components/ShareImage'

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrowseSection/>
      <Products/>
      <Explore/>
      <ShareImage/>
    </div>
  )
}
