import React from 'react'
import { Hero } from '../components/service/Hero'
import { ServicesSection } from '../components/service/ServicesSection'
import { IndustryExpertise } from '../components/service/IndustryExpertise'
import { LanguagesSection } from '../components/service/LanguagesSection'
import { CTASection } from '../components/service/CTASection'

const Services = () => {
  return (
<div className="min-h-screen md:mt-14">
      <Hero/>
      <ServicesSection />
      <IndustryExpertise/>
      <LanguagesSection />
      <CTASection />
    </div>
    //     <div className="bg-cover bg-center  h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-4xl">
//     Service Page
//  </div>
  )
}

export default Services