import React from 'react'
import './home.scss'
import Hero from './sub/Hero'
import Contact from '../Contact/Contact'
import About from '../About/About'
import BusinessGrowth from './sub/BusinessGrowth'
import WhoWeAre from './sub/WhoWeAre'
import ProjectsTabs from '../ProjectsTabs/ProjectsTabs'
import FinancialPlan from '../FinancialPlan/FinancialPlan'
import BestDeal from '../BestDeal/BestDeal'
import Gallery from '../Gallery/Gallery'
import SubServices from '../Services/sub/SubServices'
import Specialization from '../Services/sub/Specialization'
import FAQs from '../About/sub/FAQs'

export default  function Home() {
  return (
    <>

    <Hero />
    <BusinessGrowth />
    {/* <About /> */}
    {/* <WhoWeAre /> */}
    {/* <ProjectsTabs /> */}
    {/* <Contact /> */}
    {/* <FinancialPlan /> */}
    {/* <BestDeal /> */}
    {/* <GallerySection /> */}
    {/* <Gallery /> */}
    <FAQs />
    <SubServices />
     <Specialization />
    </>
  )
}

